---
title: Qwik (with Tailwind CSS)
description: A comprehensive guide and ruleset for developing Qwik applications with Tailwind CSS, TypeScript, and Vite. Includes best practices, folder structure, and additional instructions for optimal development.
category: frontend
date: 2025-01-23T18:37:37.351818
---

# Qwik (with Tailwind CSS)

# Qwik with Tailwind CSS: Best Practices and Project Setup

This `.cursorrules` file provides a set of guidelines and best practices for developing Qwik applications with Tailwind CSS, TypeScript, and Vite. It includes recommendations for functional components, folder structure, and additional instructions to ensure a smooth development process.

## Best Practices

### Functional Components

- **Prefer functional components**: Always use functional components over class components.

### Qwik.js and Tailwind CSS Best Practices

1. **Lazy-loaded functions**: Use the `$` suffix for lazy-loaded functions.
2. **Reactive state**: Utilize `useSignal()` for reactive state management.
3. **Styling**: Implement Tailwind CSS classes for styling.
4. **Reusable styles**: Use the `@apply` directive in CSS files for reusable styles.
5. **Responsive design**: Implement responsive design using Tailwind's responsive classes.
6. **Customization**: Utilize Tailwind's configuration file for customization.
7. **Type safety**: Leverage TypeScript for type safety.
8. **Development**: Use Vite's fast HMR for development.

## Folder Structure

```
src/
  components/
  routes/
  global.css
  root.tsx
  entry.ssr.tsx
public/
tailwind.config.js
postcss.config.js
vite.config.ts
tsconfig.json
```

## Additional Instructions

1. **TypeScript**: Use TypeScript for all `.ts` and `.tsx` files.
2. **Production builds**: Implement proper Tailwind CSS purging for production builds.
3. **Routing**: Utilize Qwik City for routing when applicable.
4. **Custom styles**: Use Tailwind's `@layer` directive for custom styles.
5. **Dark mode**: Implement dark mode using Tailwind's dark variant.
6. **Naming conventions**: Follow both Qwik and Tailwind naming conventions.
7. **Server-side code**: Use `server$` for server-side code execution.
8. **Optimized builds**: Leverage Vite plugins for optimized builds.

## Conclusion

By following these guidelines, you can ensure that your Qwik application with Tailwind CSS is well-structured, maintainable, and optimized for performance. Happy coding!
