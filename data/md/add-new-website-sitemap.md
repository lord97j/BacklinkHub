---
title: Add New Website Sitemap To SitemapHunt
description: How to add new website sitemap to SitemapHunt
date: '2024-08-14T13:14:40.737Z'
---

# Adding New Website Sitemap to SitemapHunt

Follow these steps to add new website sitemap to SitemapHunt.

## Step 1: Add the New Developer Tool

1. Open the SitemapHunt repository: [SitemapHunt](https://github.com/lord97j/SitemapHunt/)
2. Open the relevant JSONC file in `/data/json/[locale]/tools/{category}.jsonc`.
3. Insert the new developer tool into the file.
4. If the `{category}.jsonc` file doesn’t exist, follow these steps:
     1. Add the new category to `/data/json/[locale]/tools/category.jsonc`.
     2. Copy `/data/json/[locale]/tools/example.jsonc` to the new location `/data/json/[locale]/tools/{category}.jsonc`.
     3. Add the developer tool to this newly created file.

## Step 2: Commit Your Changes and Submit a Pull Request


### PR Checklist

Before submitting your PR, please ensure you have completed the following:

- [ ] **name**: Provide a brief title describing the tool or data you added.
- [ ] **description**: Clearly state what tool or data was added and in which category.
- [ ] **url**: Provide the url of the tool.
- [ ] **Data Sorting**: Ensure all data in the modified JSON file is sorted alphabetically.
- [ ] **No Affiliate Links**: Confirm that no affiliate links have been added.



## Important Notes:

1. Ensure all entries are sorted alphabetically; they will be displayed in this order on the site.
2. Do not include affiliate links.
