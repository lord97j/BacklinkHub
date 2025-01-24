---
title: TypeScript (Node.js, Next.js App)
description: A comprehensive guide and rules for building a TypeScript-based Notes Application using Node.js, Next.js App Router, React, Shadcn UI, Radix UI, and Tailwind CSS. This application includes features like adding, editing, deleting notes, search, filter, sort, pagination, loading states, error handling, and drag-and-drop functionality.
category: language
date: 2025-01-23T19:05:05.201783
---

# TypeScript (Node.js, Next.js App)

# TypeScript (Node.js, Next.js App) - Notes Application

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
- Use Shadcn UI, Radix, and Tailwind for components and styling.
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
  - Follow Next.js docs for Data Fetching, Rendering, and Routing.

## Application Features
- **Add New Note**: A form to add a new note.
- **List of All Notes**: Display all notes with search, filter, sort, and pagination.
- **Detail Page**: View details of a specific note.
- **Edit Page**: Edit an existing note.
- **Delete Button**: Delete a note.
- **Search Field**: Search through the list of notes.
- **Filter Field**: Filter notes based on criteria.
- **Sort Field**: Sort notes by date, title, etc.
- **Pagination**: Navigate through pages of notes.
- **Loading State**: Show a loading spinner while fetching notes.
- **Error State**: Display an error message if fetching notes fails.
- **Drag and Drop**: Reorder notes using drag-and-drop functionality.

## Installation
```bash
npm install next react react-dom typescript @types/react @types/node shadcn-ui radix-ui tailwindcss
```

## Running the Application
```bash
npm run dev
```

This application will be fully functional in development mode, providing a robust and user-friendly notes management system.
