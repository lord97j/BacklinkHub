import requests
import json
import os
import re
from typing import List, Dict, Optional
from datetime import datetime

target_url = "https://raw.githubusercontent.com/PatrickJS/awesome-cursorrules/refs/heads/main/README.md"
rules_data_path = "awesome-cursorrules.md"
category_path = "data/json/en/rules/category.jsonc"
rules_path = "data/md"
DIFY_API_KEY = "app-gjiQByRG6rhkgMpWGAqX0GFh"  # 请替换为实际的API密钥
DOMAIN = "http://localhost:3000"


def parse_rules(markdown_content: str) -> List[Dict]:
    """
    从markdown内容中解析规则列表

    Args:
        markdown_content: markdown格式的内容

    Returns:
        List[Dict]: 规则列表，每个规则包含标题、描述和类别
    """
    rules = []
    current_category = ""

    map_category = {
        "Frontend Frameworks and Libraries": "frontend",
        "Backend and Full-Stack": "backend",
        "Mobile Development": "mobile",
        "CSS and Styling": "css",
        "State Management": "state",
        "Database and API": "database",
        "Testing": "testing",
        "Build Tools and Development": "tools",
        "Language-Specific": "language",
        "Other": "other",
    }

    lines = markdown_content.split("## Rules")[1].split("## Directories")[0].split("\n")
    for line in lines:
        if line.startswith("##"):
            current_category = line.strip("# ")
        elif line.startswith("- ["):
            # 解析规则标题和URL
            match = re.match(r"- \[(.*?)\]\((.*?)\)", line)
            if match:
                raw_title, url = match.groups()

                # 解析标题中的类别
                title_parts = raw_title.split(" (")
                title = title_parts[0].strip()
                tags = []

                if len(title_parts) > 1:
                    # 提取括号中的类别并按逗号分割
                    tags = [
                        cat.strip() for cat in title_parts[1].rstrip(")").split(",")
                    ]

                rules.append(
                    {
                        "title": raw_title,
                        "url": "https://raw.githubusercontent.com/PatrickJS/awesome-cursorrules/refs/heads/main"
                        + url.strip("."),
                        "key": url.split("/")[-2].strip(),
                        "category": map_category.get(current_category, "other"),
                        "tags": tags,
                        "description": raw_title,
                    }
                )

    return rules


def load_categories() -> Dict:
    """
    加载类别配置文件

    Returns:
        Dict: 类别配置
    """
    try:
        with open(category_path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        print(f"加载类别配置失败: {e}")
        return {}


def save_rules_to_md(rule: Dict):
    """
    将规则保存到对应的md文件

    Args:
        rule: 规则
    """
    filename = f"{rule['key']}.md"
    output_path = os.path.join(rules_path, filename)
    content = f"""---
title: {rule['title']}
description: {rule['description']}
category: {rule['category']}
date: {datetime.now().isoformat()}
---

# {rule['title']}

{rule['content']}
"""
    # 保存到文件
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)
    return True


def save_rules_to_markdown(rules: List[Dict]):
    """
    将规则保存为单独的markdown文件

    Args:
        rules: 规则列表
    """
    for rule in rules:
        filename = f"{rule['title'].lower().replace(' ', '-')}.md"
        output_path = os.path.join(rules_path, filename)

        content = f"""---
title: {rule['title']}
description: {rule['description']}
category: {rule['category']}
url: {rule['url']}
---

# {rule['title']}

{rule['description']}

原始链接: {rule['url']}
"""

        try:
            with open(output_path, "w", encoding="utf-8") as f:
                f.write(content)
        except Exception as e:
            print(f"保存规则到Markdown失败 {output_path}: {e}")


def enhance_rule_with_ai(rule: Dict) -> Optional[Dict]:
    """
    使用Dify AI增强规则内容，包括优化描述、添加标签等

    Args:
        rule: 原始规则字典

    Returns:
        Dict: 增强后的规则字典，如果处理失败则返回None
    """
    try:
        # 准备请求头和数据
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {DIFY_API_KEY}",
        }

        data = {
            "inputs": {
                "title": rule["title"],
                "description": rule["description"],
                "content": rule["content"],
                "tags": ",".join(rule["tags"]),
            },
            "response_mode": "blocking",
            "user": "cursor-rules-enhancer",
        }

        # 发送请求
        response = requests.post(
            "http://dify.loveanddeepspace.net/v1/workflows/run",
            headers=headers,
            json=data,
            timeout=60,
        )
        response.raise_for_status()

        # 解析响应
        result = response.json()
        if result["data"]["status"] != "succeeded":
            print(f"AI增强规则失败 {rule['title']}: {result}")
            return None
        ai_rule = result["data"]["outputs"]["text"].strip("```json\n").strip("```")
        ai_rule = json.loads(ai_rule)

        # 更新规则内容
        enhanced_rule = rule.copy()
        enhanced_rule.update(
            {
                # "title": ai_rule["title"],
                "description": ai_rule["description"],
                "content": ai_rule["content"],
                "tags": ai_rule["tags"],
            }
        )

        return enhanced_rule

    except Exception as e:
        print(f"AI增强规则失败 {rule['title']}: {e}")
        return None


def process_rules_with_ai(rules: List[Dict]) -> List[Dict]:
    """
    批量处理规则，使用AI增强内容

    Args:
        rules: 原始规则列表

    Returns:
        List[Dict]: 增强后的规则列表
    """
    enhanced_rules = []
    for rule in rules:
        enhanced_rule = enhance_rule_with_ai(rule)
        if enhanced_rule:
            enhanced_rules.append(enhanced_rule)
        else:
            enhanced_rules.append(rule)  # 如果AI处理失败，保留原始规则
    return enhanced_rules


def get_markdown_content(url: str) -> str:
    """
    从GitHub raw URL获取markdown内容

    Args:
        url: GitHub raw URL

    Returns:
        str: markdown内容
    """
    try:
        headers = {
            "Accept": "application/vnd.github.v3.raw",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        }

        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()

        # 检查响应内容是否为空
        if not response.text:
            print("获取到的内容为空")
            return ""

        return response.text

    except requests.exceptions.Timeout:
        print("请求超时")
        return ""
    except requests.exceptions.RequestException as e:
        print(f"获取markdown内容失败: {e}")
        return ""


def download_rules_file(url: str, save_path: str) -> bool:
    """
    下载并保存规则文件

    Args:
        url: GitHub raw URL
        save_path: 保存文件的路径

    Returns:
        bool: 下载是否成功
    """
    try:
        # 获取内容
        content = get_markdown_content(url)
        if not content:
            return False

        # 确保目录存在
        os.makedirs(os.path.dirname(save_path), exist_ok=True)

        # 保存文件
        with open(save_path, "w", encoding="utf-8") as f:
            f.write(content)

        print(f"规则文件已更新: {save_path}")
        return True

    except Exception as e:
        print(f"下载规则文件失败: {e}")
        return False


def load_local_rules() -> Optional[str]:
    """
    加载本地规则文件

    Returns:
        Optional[str]: 文件内容，如果失败则返回None
    """
    try:
        if not os.path.exists(rules_data_path):
            return None

        with open(rules_data_path, "r", encoding="utf-8") as f:
            return f.read()

    except Exception as e:
        print(f"加载本地规则文件失败: {e}")
        return None


def main():
    """
    主函数，执行完整的处理流程
    """
    # 1. 下载更新：awesome-cursorrules.md
    if not download_rules_file(target_url, rules_data_path):
        print("尝试使用本地缓存文件...")
        content = load_local_rules()
        if not content:
            print("无法获取规则内容")
            return
    else:
        content = load_local_rules()

    # 2. 解析规则列表
    rules = parse_rules(content)
    if not rules:
        print("未找到规则")
        return

    # 3. 获取规则内容
    category_map = {}
    for rule in rules:
        content = get_markdown_content(rule["url"])
        if not content:
            print(f"获取规则内容失败: {rule['url']}")
            continue
        rule["content"] = content

        # AI 增强规则
        enhanced_rule = enhance_rule_with_ai(rule)
        if enhanced_rule:
            rule = enhanced_rule
            print(f"AI增强规则成功 {rule['title']}")
        else:
            print(f"AI增强规则失败 {rule['title']}")
            continue

        save_rules_to_md(rule)
        if rule["category"] not in category_map:
            category_map[rule["category"]] = []
        category_map[rule["category"]].append(
            {
                "name": rule["title"],
                "description": rule["description"],
                "url": f"{DOMAIN}/article/{rule['key']}",
                "tags": rule["tags"],
            }
        )

    # 4. 保存规则类型到JSONC文件（使用增强后的规则
    rule_category_path = "data/json/en/tools"
    rule_category_path_zh = "data/json/zh/tools"
    for category, rules in category_map.items():
        filename = f"{category}.jsonc"
        output_path = os.path.join(rule_category_path, filename)
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(rules, f, indent=2)

        output_path_zh = os.path.join(rule_category_path_zh, filename)
        with open(output_path_zh, "w", encoding="utf-8") as f:
            json.dump(rules, f, indent=2)


if __name__ == "__main__":
    main()
    # get_markdown_content("https://raw.githubusercontent.com/PatrickJS/awesome-cursorrules/refs/heads/main/rules/qwik-tailwind-cursorrules-prompt-file/.cursorrules")
