---
title: TypeScript (Next.js, Supabase)
description: Comprehensive guidelines for building scalable and maintainable TypeScript applications using Next.js, Supabase, and modern UI libraries like Shadcn UI and Radix UI.
category: language
date: 2025-01-23T19:04:48.627335
---

# TypeScript (Next.js, Supabase)

# TypeScript (Next.js, Supabase) - Best Practices and Guidelines

## Overview
This document outlines best practices and guidelines for building scalable and maintainable TypeScript applications using Next.js, Supabase, and modern UI libraries like Shadcn UI and Radix UI. The guidelines cover coding standards, file structure, performance optimization, and more.

## Code Style and Structure
- **Concise and Technical TypeScript Code**: Write concise, technical TypeScript code with accurate examples.
- **Functional and Declarative Programming**: Use functional and declarative programming patterns; avoid classes.
- **Modularization**: Prefer iteration and modularization over code duplication.
- **Descriptive Variable Names**: Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).
- **File Structure**: Structure files as follows:
  - Exported component
  - Subcomponents
  - Helpers
  - Static content
  - Types

## Naming Conventions
- **Directories**: Use lowercase with dashes for directories (e.g., `components/auth-wizard`).
- **Exports**: Favor named exports for components.

## TypeScript Usage
- **TypeScript Everywhere**: Use TypeScript for all code; prefer interfaces over types.
- **Avoid Enums**: Avoid enums; use const objects or `as const` assertions instead.
- **Functional Components**: Use functional components with TypeScript interfaces.

## Syntax and Formatting
- **Arrow Functions**: Use arrow functions for components and handlers.
- **Concise Conditionals**: Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- **Declarative JSX**: Use declarative JSX.

## UI and Styling
- **UI Libraries**: Use Shadcn UI, Radix, and Tailwind for components and styling.
- **Responsive Design**: Implement responsive design with Tailwind CSS; use a mobile-first approach.

## Performance Optimization
- **Minimize Client-Side Hooks**: Minimize `use client`, `useEffect`, and `useState`; favor React Server Components (RSC).
- **Suspense**: Wrap client components in Suspense with fallback.
- **Dynamic Loading**: Use dynamic loading for non-critical components.
- **Image Optimization**: Optimize images: use Next.js Image component, include size data, implement lazy loading.

## Database Querying & Data Model Creation
- **Supabase SDK**: Use Supabase SDK for data fetching and querying.
- **Schema Builder**: For data model creation, use Supabase's schema builder.

## Key Conventions
- **URL State Management**: Use `nuqs` for URL search parameter state management.
- **Web Vitals**: Optimize Web Vitals (LCP, CLS, FID).
- **Limit `use client`**:
  - Favor server components and Next.js SSR.
  - Use only for Web API access in small components.
  - Avoid for data fetching or state management.

## Vercel AI SDK Integration
- **AI-Powered Features**: Use Vercel AI SDK for building AI-powered features.
- **AI SDK Core**: Implement AI SDK Core for generating text, structured objects, and tool calls with LLMs.
- **AI SDK UI Hooks**: Utilize AI SDK UI hooks for building chat interfaces.
- **AI SDK RSC**: Leverage AI SDK RSC for streaming generative user interfaces with React Server Components.

## Data Fetching and API Routes
- **App Router Conventions**: Use Next.js App Router conventions for data fetching and API routes.
- **Caching and Revalidation**: Implement efficient caching and revalidation strategies using Next.js built-in features.
- **Route Handlers**: Use route handlers (`route.ts`) for API routes in the App Router.

## Error Handling and Loading States
- **Error Boundaries**: Implement error boundaries and `error.tsx` files for error handling.
- **Loading States**: Use `loading.tsx` files for managing loading states.

## SEO and Metadata
- **Metadata API**: Use Next.js 14's metadata API for SEO optimization.

## Follow Next.js Docs
- **Data Fetching, Rendering, and Routing**: Follow Next.js docs for Data Fetching, Rendering, and Routing.

