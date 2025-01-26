---
title: Qwik (Basic Setup with TypeScript and Vite)
description: Comprehensive guide for setting up Qwik.js with TypeScript and Vite, including best practices, folder structure, and performance optimization tips.
category: rules
date: 2025-01-23T18:37:23.602460
---


# Qwik (Basic Setup with TypeScript and Vite)

# Qwik.js Basic Setup with TypeScript and Vite

## Best Practices
- **Functional Components**: Prefer functional components for better readability and maintainability.
- **Lazy-Loaded Functions**: Use `$` suffix for lazy-loaded functions to enhance performance.
- **Reactive State**: Utilize `useSignal()` for managing reactive state efficiently.
- **Complex State Objects**: Implement `useStore()` for handling complex state objects.
- **Data Fetching**: Use `useResource$()` for data fetching operations.
- **Side Effects**: Implement `useTask$()` for managing side effects.
- **Browser-Only Code**: Utilize `useVisibleTask$()` for code that should only run in the browser.
- **Type Safety**: Leverage TypeScript to ensure type safety across your application.
- **Development**: Use Vite's fast Hot Module Replacement (HMR) for a smooth development experience.

## Folder Structure
```
src/
  components/
  routes/
  global.css
  root.tsx
  entry.ssr.tsx
public/
vite.config.ts
tsconfig.json
```

## Additional Instructions
1. **TypeScript**: Use TypeScript for all `.ts` and `.tsx` files to maintain type safety.
2. **Error Boundaries**: Implement proper error boundaries to catch and handle errors gracefully.
3. **Routing**: Utilize Qwik City for routing when applicable to manage navigation efficiently.
4. **Optimization**: Use Qwik's built-in optimization features to enhance performance.
5. **Lazy-Loading**: Implement lazy-loading for components and resources to improve load times.
6. **Naming Conventions**: Follow Qwik's naming conventions and best practices for consistency.
7. **Server-Side Code**: Use `server$` for executing server-side code securely.
8. **Vite Plugins**: Leverage Vite plugins for optimized builds and enhanced development workflows.

