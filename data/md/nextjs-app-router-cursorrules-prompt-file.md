---
title: Next.js (App Router)
description: Comprehensive guide and rules for implementing best practices in Next.js App Router projects, including folder structure, coding standards, and performance optimization.
category: frontend
date: 2025-01-23T18:36:49.908155
---

# Next.js (App Router)

# Next.js App Router Best Practices

## Introduction
This document outlines the best practices and rules for developing applications using the Next.js App Router. It covers everything from folder structure to coding standards and performance optimization.

## Best Practices
```javascript
const nextjsAppRouterBestPractices = [
  "Use server components by default",
  "Implement client components only when necessary",
  "Utilize the new file-based routing system",
  "Use layout.js for shared layouts",
  "Implement loading.js for loading states",
  "Use error.js for error handling",
  "Utilize route handlers for API routes",
];
```

## Folder Structure
```
app/
  layout.js
  page.js
  components/
  lib/
  styles/
public/
```

## Additional Instructions
1. **Use TypeScript for type safety**
2. **Implement proper metadata for SEO**
3. **Utilize Next.js Image component for optimized images**
4. **Use CSS Modules or Tailwind CSS for styling**
5. **Implement proper error boundaries**
6. **Follow Next.js naming conventions for special files**
7. **Use environment variables for configuration**

## Performance Optimization
- **Lazy load components** where possible to reduce initial load time.
- **Optimize images** using the Next.js Image component.
- **Minimize the use of client-side JavaScript** to improve performance.

## Testing
- **Unit tests** should be written using Jest and React Testing Library.
- **Snapshot testing** for UI components to ensure consistency.
- **Test coverage** should be at least 80%.

## Documentation
- **JSDoc** for all functions and components.
- **README.md** in each main directory with both English and Chinese versions.

## Error Handling
- **Global error boundary** to catch runtime errors.
- **try/catch blocks** for asynchronous operations.

