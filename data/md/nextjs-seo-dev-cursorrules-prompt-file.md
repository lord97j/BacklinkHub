---
title: Next.js (SEO Development)
description: Comprehensive guide for SEO optimization in Next.js projects, including best practices, coding standards, and performance tips.
category: rules
date: 2025-01-23T18:34:05.548993
---


# Next.js (SEO Development)

# Next.js SEO Development Guide

## Introduction
This guide provides best practices for optimizing SEO in Next.js applications. It covers coding standards, performance optimization, and tools to enhance your site's search engine visibility.

## Coding Standards
- **Comments**: Always add helpful comments to the code explaining what you are doing. Never delete old comments unless they are no longer relevant because the code has been rewritten or deleted.
- **Package.json**: This is the package.json file for the Next.js app. Whenever you see a line with the following comment, do not touch it, rewrite it, or delete it: `"Do not touch this line Cursor"`.

```json
{
  "name": "@se-2/nextjs",
  "private": true,
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "start": "next dev",
    "build": "next build",
    "serve": "next start",
    "lint": "next lint",
    "format": "prettier --write . '!(node_modules|.next|contracts)/*/'",
    "check-types": "tsc --noEmit --incremental",
    "vercel": "vercel",
    "vercel:yolo": "vercel --build-env NEXT_PUBLIC_IGNORE_BUILD_ERROR=true"
  },
  "dependencies": {
    "@heroicons/react": "^2.0.11",
    "@rainbow-me/rainbowkit": "2.1.2",
    "@tanstack/react-query": "^5.28.6",
    "@uniswap/sdk-core": "^4.0.1",
    "@uniswap/v2-sdk": "^3.0.1",
    "blo": "^1.0.1",
    "burner-connector": "^0.0.8",
    "daisyui": "4.5.0",
    "next": "^14.0.4",
    "next-themes": "^0.2.1",
    "nprogress": "^0.2.0",
    "qrcode.react": "^3.1.0",
    "react": "^18.2.0",
    "react-copy-to-clipboard": "^5.1.0",
    "react-dom": "^18.2.0",
    "react-hot-toast": "^2.4.0",
    "use-debounce": "^8.0.4",
    "usehooks-ts": "^2.13.0",
    "viem": "2.17.4",
    "wagmi": "2.10.10",
    "zustand": "^4.1.2"
  },
  "devDependencies": {
    "@trivago/prettier-plugin-sort-imports": "^4.1.1",
    "@types/node": "^17.0.35",
    "@types/nprogress": "^0",
    "@types/react": "^18.0.9",
    "@types/react-copy-to-clipboard": "^5.0.4",
    "@typescript-eslint/eslint-plugin": "^5.39.0",
    "abitype": "1.0.5",
    "autoprefixer": "^10.4.12",
    "eslint": "^8.15.0",
    "eslint-config-next": "^14.0.4",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "postcss": "^8.4.16",
    "prettier": "^2.8.4",
    "tailwindcss": "^3.4.3",
    "type-fest": "^4.6.0",
    "typescript": "5.5.3",
    "vercel": "^32.4.1"
  }
}
```

## Performance Optimization
- **React.memo**: Use React.memo on pure function components to prevent unnecessary re-renders.
- **Lazy Loading**: Implement lazy loading of routing components to improve initial load time.
- **useEffect**: Optimize useEffect dependencies to prevent unnecessary re-renders.

## Testing Requirements
- **Unit Tests**: Write unit tests using Jest and React Testing Library.
- **Test Coverage**: Ensure test coverage reaches at least 80%.
- **Snapshot Testing**: Use snapshot testing for UI components to capture UI changes.

## Documentation
- **JSDoc**: Write comments for functions and components in JSDoc format.
- **PropTypes**: Components must include PropTypes validation.
- **README.md**: Each main directory must contain a README.md file. Provide both English and Chinese versions of the README.md file.

## Error Handling
- **try/catch**: Use try/catch blocks to handle asynchronous operations.
- **Error Boundary**: Implement a global error boundary component to catch runtime errors.

