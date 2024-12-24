import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    let url = searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // 确保 URL 格式正确
    if (!url.startsWith('http')) {
        url = `https://${url}`;
    }

    try {
        // 尝试常见的 sitemap 路径
        const sitemapPaths = [
            '/sitemap.xml',
            '/sitemap_index.xml',
            '/sitemap/',
            '/sitemap.php',
            '/sitemap.txt'
        ];

        for (const path of sitemapPaths) {
            const sitemapUrl = new URL(path, url).toString();
            const response = await fetch(sitemapUrl);
            
            if (response.ok) {
                return NextResponse.json({ sitemapUrl });
            }
        }

        return NextResponse.json({ error: 'Sitemap not found' }, { status: 404 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch sitemap' }, { status: 500 });
    }
}