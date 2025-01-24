---
title: Next.js (Vercel, TypeScript)
description: Comprehensive guide for integrating AI SDK RSC with Vercel middleware and KV database in a Next.js project using TypeScript, Tailwind CSS, and Shadcn UI.
category: frontend
date: 2025-01-23T18:36:36.908749
---

# Next.js (Vercel, TypeScript)

# Next.js with AI SDK RSC, Vercel Middleware, and KV Database Integration

## Environment and Tools
- **Expertise**: TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI, Tailwind, Vercel middleware.
- **Familiarity**: Vercel's KV database for managing stateful data.

## Code Style and Structure
- **TypeScript**: Write concise, technical TypeScript code with accurate examples.
- **Functional Programming**: Use functional and declarative programming patterns; avoid classes.
- **Modularization**: Prefer iteration and modularization over code duplication.
- **Descriptive Naming**: Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).
- **File Structure**: Structure files as exported component, subcomponents, helpers, static content, types.

## Naming Conventions
- **Directories**: Use lowercase with dashes (e.g., `components/auth-wizard`).
- **Exports**: Favor named exports for components.

## TypeScript Usage
- **Interfaces**: Prefer interfaces over types.
- **Maps**: Avoid enums; use maps instead.
- **Functional Components**: Use functional components with TypeScript interfaces.

## Syntax and Formatting
- **Functions**: Use the `function` keyword for pure functions.
- **Conditionals**: Avoid unnecessary curly braces; use concise syntax for simple statements.
- **JSX**: Use declarative JSX.

## UI and Styling
- **Components**: Use Shadcn UI, Radix UI, and Tailwind for components and styling.
- **Responsive Design**: Implement responsive design with Tailwind CSS; use a mobile-first approach.

## Performance Optimization
- **Minimize Client-Side**: Minimize `use client`, `useEffect`, and `setState`; favor React Server Components (RSC).
- **Suspense**: Wrap client components in `Suspense` with fallback.
- **Dynamic Loading**: Use dynamic loading for non-critical components.
- **Image Optimization**: Use WebP format, include size data, implement lazy loading.

## Key Conventions
- **State Management**: Use `nuqs` for URL search parameter state management.
- **Web Vitals**: Optimize Web Vitals (LCP, CLS, FID).
- **Client Components**: Limit `use client`:
  - Favor server components and Next.js SSR.
  - Use only for Web API access in small components.
  - Avoid for data fetching or state management.
- **Next.js Best Practices**: Follow Next.js docs for Data Fetching, Rendering, and Routing.

## AI SDK RSC Integration

### Setup and Installation
- **Library Integration**: Integrate `ai-sdk-rsc` into your Next.js project.
  - Install the library using `npm install ai-sdk-rsc` or `yarn add ai-sdk-rsc`.
  - Configure middleware in `middleware.ts` to manage requests and sessions using Vercel's KV database.

### Middleware Implementation
- **Middleware File**: Create a middleware file in the `middleware` directory (e.g., `middleware/ai-middleware.ts`).
- **Session Management**: Use middleware to parse user input and manage sessions with the KV database.
  - Example:
    ```typescript
    import { NextRequest, NextResponse } from 'next/server';
    import { kv } from '@vercel/kv';
    export async function middleware(req: NextRequest) {
      const sessionId = req.cookies.get('session-id');
      if (!sessionId) {
        const newSessionId = generateSessionId();
        await kv.set(newSessionId, { state: {} }); // Initialize state in KV database
        const res = NextResponse.next();
        res.cookies.set('session-id', newSessionId);
        return res;
      }
      // Fetch state from KV database
      const state = await kv.get(sessionId);
      req.nextUrl.searchParams.set('state', JSON.stringify(state));
      return NextResponse.next();
    }
    function generateSessionId() {
      return Math.random().toString(36).substring(2);
    }
    ```

### React Server Components (RSC) and AI SDK
- **AI SDK Hooks**: Use `ai-sdk-rsc` hooks to manage state and stream generative content.
  - Example usage of AI SDK hooks in a React Server Component:
    ```typescript
    import { useAIStream } from 'ai-sdk-rsc';
    import { FC } from 'react';
    interface ChatProps {
      initialMessage: string;
    }
    const Chat: FC = ({ initialMessage }) => {
      const { messages, sendMessage } = useAIStream({
        initialMessage,
        onMessage: (message) => console.log('New message:', message),
      });
      return (
        {msg.content}
      );
    };
    export default Chat;
    ```

### KV Database Integration
- **Data Management**: Use Vercel's KV database to store and retrieve session data.
  - Utilize `kv.set`, `kv.get`, and `kv.delete` to manage data.
  - Ensure the database operations are asynchronous to avoid blocking server-side rendering (SSR).

### Data Fetching and State Management
- **Server-Side State**: Use Next.js data fetching methods (`getServerSideProps`, `getStaticProps`) to manage server-side state.
- **Client-Side Fetching**: Avoid client-side data fetching methods (`useEffect`, `fetch`) except for critical, non-blocking operations.

### Deployment Considerations
- **Environment Variables**: Ensure all environment variables (e.g., API keys, database credentials) are securely stored in Vercel's environment settings.
- **Scalability**: Configure Vercel's KV and other serverless functions correctly to handle scalability and performance needs.

By following these extended rules, you'll be able to create a well-optimized, scalable, and efficient Next.js application that leverages `ai-sdk-rsc`, Vercel middleware, and KV database for building sophisticated AI-driven interfaces.
