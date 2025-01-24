---
title: Add New Cursor Rules To CursorRules.org
description: How to add new developer tools to DevToolset
date: '2024-08-14T13:14:40.737Z'
---

# Add New Cursor Rules to CursorRules.org

Follow these steps to add new cursor rules to CursorRules.org.

## Step 1: Add New Cursor Rules

1. Open the CursorRules repository: [CursorRules](https://github.com/lord97j/cursorrules/)
2. Open the corresponding JSONC file `/data/json/[locale]/rules/{category}.jsonc`
3. Insert the new cursor rule in the file
4. If the `{category}.jsonc` file doesn't exist, follow these steps:
     1. Add the new category in `/data/json/[locale]/rules/category.jsonc`
     2. Copy `/data/json/[locale]/rules/example.jsonc` to the new location `/data/json/[locale]/rules/{category}.jsonc`
     3. Add the cursor rule in this newly created file

## Step 2: Submit Changes and Create Pull Request

### PR Checklist

Before submitting a PR, ensure you complete the following:

- [ ] **Name**: Provide a short title describing the rule being added
- [ ] **Description**: Clearly explain what rule was added and which category it belongs to
- [ ] **URL**: Provide source link for the rule (if available)
- [ ] **Data Sorting**: Ensure all data in the modified JSON file is sorted alphabetically
- [ ] **Rule Validation**: Confirm the rule works and is valid in mainstream editors
- [ ] **Relevance**: Ensure only cursor operation related rules are included

## Important Notes:

1. Ensure all entries are sorted alphabetically as they will be displayed in this order on the website
2. Rules must be validated and work in mainstream editors
3. Do not submit rules unrelated to cursor operations
