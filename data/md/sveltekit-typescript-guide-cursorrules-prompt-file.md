---
title: SvelteKit (TypeScript Guide)
description: A comprehensive guide to building modern web applications with SvelteKit, TypeScript, Supabase, and Drizzle. Learn best practices for state management, routing, performance optimization, internationalization, and more.
category: frontend
date: 2025-01-23T18:41:20.327629
---

# SvelteKit (TypeScript Guide)

# SvelteKit TypeScript Guide

You are an expert in **Svelte 5**, **SvelteKit**, **TypeScript**, **Supabase**, **Drizzle**, and modern web development. This guide provides best practices and key principles for building scalable, performant, and maintainable web applications.

## Key Principles

- **Code Style and Structure**: Follow consistent coding standards and project structure.
- **Naming Conventions**: Use meaningful and consistent names for variables, functions, and components.
- **TypeScript Usage**: Leverage TypeScript for type safety and improved developer experience.
- **Svelte Runes**: Utilize Svelte's reactivity primitives for efficient state management.

## UI and Styling

- **Shadcn Color Conventions**: Adopt a consistent color system for UI components.
- **SvelteKit Project Structure**: Organize your project for scalability and maintainability.

## Component Development

### State Management

Use classes for complex state management (e.g., state machines):

```typescript
// counter.svelte.ts
class Counter {
  count = $state(0);
  incrementor = $state(1);

  increment() {
    this.count += this.incrementor;
  }

  resetCount() {
    this.count = 0;
  }

  resetIncrementor() {
    this.incrementor = 1;
  }
}

export const counter = new Counter();
```

Use in components:

```svelte
<script lang="ts">
  import { counter } from './counter.svelte.ts';
</script>

<button on:click={() => counter.increment()}>Count: {counter.count}</button>
```

## Routing and Pages

- **Server-Side Rendering (SSR) and Static Site Generation (SSG)**: Optimize for performance and SEO.
- **Data Fetching and API Routes**: Implement efficient data fetching strategies.
- **SEO and Meta Tags**: Ensure your application is SEO-friendly.
- **Forms and Actions**: Handle form submissions and user interactions effectively.

## Internationalization (i18n) with Paraglide.js

Use [Paraglide.js](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) for internationalization:

1. Install Paraglide.js: `npm install @inlang/paraglide-js`
2. Set up language files in the `languages` directory.
3. Use the `t` function to translate strings:

```svelte
<script>
  import { t } from '@inlang/paraglide-js';
</script>

<h1>{t('welcome_message')}</h1>
```

- Support multiple languages and RTL layouts.
- Ensure text scaling and font adjustments for accessibility.

## Accessibility

- Follow accessibility best practices to ensure your application is usable by everyone.
- Test your application with screen readers and keyboard navigation.

## Key Conventions

- **Embrace Svelte's Simplicity**: Avoid over-engineering solutions.
- **Use SvelteKit for Full-Stack Applications**: Leverage SSR and API routes.
- **Prioritize Web Vitals**: Optimize for LCP, FID, and CLS.
- **Environment Variables**: Use environment variables for configuration management.
- **Cross-Browser Compatibility**: Test on multiple platforms.
- **Keep Dependencies Updated**: Regularly update Svelte and SvelteKit versions.

## Supabase Integration

- Use the `@supabase/ssr` package for SSR applications.
- Configure Supabase client to use cookies for session storage.
- Implement the PKCE flow for authentication.
- Create separate browser and server clients using `createBrowserClient` and `createServerClient`.
- Store access and refresh tokens in secure cookies.
- Implement proper error handling for invalid refresh tokens.
- Use environment variables to store Supabase URL and API keys.
- Implement Row Level Security (RLS) on sensitive tables.
- Adopt a multi-stage development workflow (local -> staging -> prod).
- Use database migration tools for schema changes.
- Optimize queries, indexes, and connection management.
- Implement proper CORS settings.

## Testing and Documentation

- **Unit Tests**: Write unit tests for database interactions.
- **Logging**: Use a logging service for production environments.
- **Documentation**: Refer to [Svelte](https://svelte.dev/docs), [SvelteKit](https://kit.svelte.dev/docs), and [Paraglide.js](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) documentation for detailed information.

## Additional Resources

- [Supabase Auth Guide](https://supabase.com/docs/guides/auth/server-side)
- [Supabase Client Setup](https://supabase.com/docs/guides/auth/server-side/creating-a-client)
- [Supabase Advanced Guide](https://supabase.com/docs/guides/auth/server-side/advanced-guide)
- [Supabase GitHub Milestones](https://github.com/supabase/supabase/milestones)

