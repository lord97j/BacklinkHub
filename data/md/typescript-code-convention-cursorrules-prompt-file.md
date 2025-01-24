---
title: TypeScript Code Convention
description: Comprehensive guide for TypeScript code conventions, best practices, and performance optimization in modern web development using Node.js, Next.js App Router, React, Expo, tRPC, Shadcn UI, Radix UI, and Tailwind CSS.
category: tools
date: 2025-01-23T18:57:18.210641
---

# TypeScript Code Convention

# TypeScript Code Convention Guide

This guide outlines the best practices and conventions for writing TypeScript code in modern web development projects. It covers naming conventions, syntax, error handling, UI styling, performance optimization, and framework-specific guidelines for Next.js and Expo.

## Code Style and Structure

- **Naming Conventions**: Use camelCase for variables and functions, PascalCase for classes and components, and UPPER_CASE for constants.
- **TypeScript Usage**: Always define types for variables, function parameters, and return values. Use interfaces and types for complex data structures.
- **Syntax and Formatting**: Follow consistent indentation (2 spaces), use semicolons, and prefer single quotes for strings.

## Error Handling and Validation

- Use `try/catch` blocks for asynchronous operations.
- Implement global error boundaries in React applications.
- Validate input data using libraries like `zod` or `yup`.

## UI and Styling

- Use **Tailwind CSS** for utility-first styling.
- Leverage **Shadcn UI** and **Radix UI** for accessible and customizable components.
- Follow a consistent design system for spacing, colors, and typography.

## Key Conventions

- **Performance Optimization**: Use `React.memo` for pure components, lazy load routes, and optimize `useEffect` dependencies.
- **Next.js Specific**: Follow Next.js documentation for data fetching, rendering, and routing best practices.
- **Expo Specific**: Adhere to Expo guidelines for mobile development, including navigation and state management.

## Testing Requirements

- Write unit tests using **Jest** and **React Testing Library**.
- Ensure test coverage is at least 80%.
- Use snapshot testing for UI components.

## Documentation

- Write JSDoc comments for functions and components.
- Include PropTypes validation for React components.
- Provide README.md files in each main directory with both English and Chinese versions.

## Error Handling

- Use `try/catch` blocks for asynchronous operations.
- Implement global error boundary components in React applications.

By following these conventions, you can ensure clean, maintainable, and high-performance TypeScript code in your projects.
