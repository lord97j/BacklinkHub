---
title: TypeScript (Node.js, Next.js, React, UI, CSS)
description: Comprehensive guide and rules for TypeScript development in Node.js, Next.js, React, and UI projects, focusing on best practices, performance optimization, and modern styling techniques.
category: language
date: 2025-01-23T19:01:48.446426
---

# TypeScript (Node.js, Next.js, React, UI, CSS)

# TypeScript Best Practices for Node.js, Next.js, React, and UI Development

## Code Style and Structure
- **Write concise, technical TypeScript code** with accurate examples.
- **Use functional and declarative programming patterns**; avoid classes.
- **Prefer iteration and modularization** over code duplication.
- **Use descriptive variable names** with auxiliary verbs (e.g., `isLoading`, `hasError`).
- **Structure files**: exported component, subcomponents, helpers, static content, types.

## Naming Conventions
- **Use lowercase with dashes for directories** (e.g., `components/auth-wizard`).
- **Favor named exports** for components.

## TypeScript Usage
- **Use TypeScript for all code**; prefer interfaces over types.
- **Avoid enums**; use maps instead.
- **Use functional components** with TypeScript interfaces.

## Syntax and Formatting
- **Use the `function` keyword** for pure functions.
- **Avoid unnecessary curly braces** in conditionals; use concise syntax for simple statements.
- **Use declarative JSX**.

## UI and Styling
- **Use Shadcn UI, Radix, and Tailwind** for components and styling.
- **Implement responsive design** with Tailwind CSS; use a mobile-first approach.

## Performance Optimization
- **Minimize `use client`, `useEffect`, and `setState`**; favor React Server Components (RSC).
- **Wrap client components in Suspense** with fallback.
- **Use dynamic loading** for non-critical components.
- **Optimize images**: use WebP format, include size data, implement lazy loading.

## Key Conventions
- **Use `nuqs`** for URL search parameter state management.
- **Optimize Web Vitals** (LCP, CLS, FID).
- **Limit `use client`**:
  - **Favor server components** and Next.js SSR.
  - **Use only for Web API access** in small components.
  - **Avoid for data fetching** or state management.

## Follow Next.js Docs
- **Data Fetching**, **Rendering**, and **Routing** should follow the official Next.js documentation.

## Additional Best Practices
- **Implement global error boundary components** for better error handling.
- **Use JSDoc for documentation** to ensure code is well-documented.
- **Write unit tests** using Jest and React Testing Library, aiming for at least 80% test coverage.
- **Use snapshot testing** for UI components to capture changes.

## File Structure
- **components/**: Reusable UI components.
- **app/[locale]/**: Next.js pages supporting multiple languages.
- **lib/**: Utility functions.
- **data/**: JSON and Markdown files for content management.
- **public/**: Static resources.
- **styles/**: Tailwind CSS configuration and global styles.

## Internationalization and Theming
- **Support multiple languages** using `next-intl`.
- **Implement dark mode** and easily expandable themes.

## Advertising and Analytics
- **Support Google Adsense** and other ad networks.
- **Integrate analytics** with Google Analytics or Plausible Analytics.

## Deployment
- **Deploy easily** using Vercel with a simple deployment process.

## Conclusion
By following these best practices, you can ensure that your TypeScript projects in Node.js, Next.js, React, and UI development are efficient, maintainable, and scalable.
