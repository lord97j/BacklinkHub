---
title: React (Chakra UI)
description: A comprehensive guide for building React applications using Chakra UI, focusing on best practices, performance optimization, and maintainable code structure.
category: rules
date: 2025-01-23T18:53:24.913718
---


# React (Chakra UI)

# React + Chakra UI .cursorrules

## Project Background
This project is a React application that leverages Chakra UI for building a consistent, accessible, and responsive user interface. The application follows best practices for modern frontend development, including the use of functional components, TypeScript for type safety, and Chakra UI's built-in features for theming, accessibility, and performance optimization.

## Coding Standards
- Use functional components with hooks to ensure a modern and maintainable codebase.
- Variable declarations should prioritize `const` over `let`.
- Variable and function names should use `camelCase`, while component names should use `PascalCase`.

## Preferred Libraries
- **Chakra UI**: For building consistent and accessible UI components.
- **TypeScript**: For type safety and improved developer experience.
- **React**: As the core library for building the user interface.

## File Structure
```
src/
  components/  # Reusable UI components
  pages/       # Application pages
  theme/       # Custom theme configuration
    index.js
    foundations/
    components/
  hooks/       # Custom React hooks
  utils/       # Utility functions
```

## Performance Optimization Guide
- Use `React.memo` on pure function components to prevent unnecessary re-renders.
- Implement lazy loading for routing components to improve initial load performance.
- Optimize `useEffect` dependencies to prevent unnecessary side effects.

## Testing Requirements
- Write unit tests using **Jest** and **React Testing Library**.
- Ensure test coverage reaches at least 80%.
- Use snapshot testing for UI components to detect unintended changes.

## Documentation Specifications
- Write comments for functions and components in **JSDoc** format.
- Components must include **PropTypes** validation.
- Each main directory must contain a `README.md` file.
- Provide both **English** and **Chinese** versions of the `README.md` file.

## Error Handling
- Use `try/catch` blocks to handle asynchronous operations.
- Implement a global error boundary component to catch runtime errors.

## Additional Instructions
1. Use **TypeScript** for type safety with Chakra UI components.
2. Implement proper component composition using Chakra UI.
3. Utilize Chakra UI's built-in accessibility features.
4. Use the `as` prop for semantic HTML rendering.
5. Implement dark mode using Chakra UI's color mode.
6. Use Chakra UI's layout components for responsive design.
7. Follow Chakra UI best practices for performance optimization.

## Chakra UI Best Practices
- Use `ChakraProvider` at the root of your app.
- Utilize Chakra UI components for consistent design.
- Implement a custom theme for brand-specific styling.
- Use responsive styles with the Chakra UI breakpoint system.
- Leverage Chakra UI hooks for enhanced functionality.

