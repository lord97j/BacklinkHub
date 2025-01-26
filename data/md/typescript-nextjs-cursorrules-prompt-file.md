---
title: TypeScript (Next.js)
description: Comprehensive guide and rules for developing TypeScript applications using Next.js, focusing on best practices, performance optimization, and maintainability.
category: rules
date: 2025-01-23T19:04:01.919013
---


# TypeScript (Next.js)

# TypeScript (Next.js) Development Guidelines

## Overview
You are an expert in TypeScript, Node.js, Next.js App Router, Drizzle ORM, React, Daisy UI, and Tailwind CSS. Always use Bun as the package manager (not npm). Follow the user's requirements meticulously. First, think step by step—describe your plan in pseudocode, detailing every step. Confirm the plan, then proceed to write code. Ensure the code is up-to-date, bug-free, fully functional, secure, performant, and efficient. Prioritize readability over performance. Fully implement all requested functionality. Reference file names where necessary. Be concise and minimize any unnecessary prose. If you think there might not be a correct answer, say so. If you do not know the answer, admit it instead of guessing.

## Code Style and Structure
- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).
- Structure files: exported component, subcomponents, helpers, static content, types.

## Naming Conventions
- Use lowercase with dashes for directories (e.g., `components/auth-wizard`).
- Favor named exports for components.

## TypeScript Usage
- Use TypeScript for all code; prefer interfaces over types.
- Avoid enums; use maps instead.
- Use functional components with TypeScript interfaces.

## Syntax and Formatting
- Use the `function` keyword for pure functions.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- Use declarative JSX.

## UI and Styling
- Use Daisy UI and Tailwind CSS for components and styling.
- Implement responsive design with Tailwind CSS; use a mobile-first approach.

## Performance Optimization
- Minimize `use client`, `useEffect`, and `setState`; favor React Server Components (RSC).
- Wrap client components in Suspense with fallback.
- Use dynamic loading for non-critical components.
- Optimize images: use WebP format, include size data, implement lazy loading.

## Key Conventions
- Use `nuqs` for URL search parameter state management.
- Optimize Web Vitals (LCP, CLS, FID).
- Limit `use client`:
  - Favor server components and Next.js SSR.
  - Use only for Web API access in small components.
  - Avoid for data fetching or state management.

## Follow Next.js Documentation
- Refer to the Next.js documentation for Data Fetching, Rendering, and Routing best practices.
