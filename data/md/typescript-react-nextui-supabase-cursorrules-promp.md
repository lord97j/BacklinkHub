---
title: TypeScript (React, NextUI, Supabase)
description: A modern web application built with TypeScript, React, NextUI, and Supabase, featuring authentication, a responsive UI, and a dashboard for logged-in users.
category: rules
date: 2025-01-23T19:02:45.373511
---


# TypeScript (React, NextUI, Supabase)

# Codebase Overview

This codebase is part of a web application built using **TypeScript**, **React**, and **NextUI** components. It is designed to support a landing page, authentication flows, and a dashboard for logged-in users. The application integrates with **Supabase** for backend services, including authentication, database interactions, and storage.

## Stack and Key Technologies

- **Frontend Framework**: React
- **TypeScript**: Used for type-safe code across the frontend.
- **NextUI**: A React UI library used for building UI components like buttons, modals, inputs, etc.
- **Supabase**: An open-source Firebase alternative used for backend services like authentication, database, and storage.
- **Next.js**: Likely used as the React framework, indicated by the usage of `next/navigation` and server utilities.
- **Iconify**: For icons across the application.

## Purpose and Functionality

### Authentication

The application includes a comprehensive authentication flow:

- **Login**: Users can log in using email/password or GitHub OAuth. The login logic is handled in `frontend/app/(landing-page)/login/action.ts`.
- **Signup**: New users can sign up with an email and password. The signup logic is also in `frontend/app/(landing-page)/login/action.ts`.
- **Logout**: Users can log out, with the logic located in `frontend/app/(landing-page)/logout/action.ts`.
- **Email Confirmation**: The application handles email confirmation through a callback route in `frontend/app/auth/callback/confirm/route.ts`.

### User Interface

- **Landing Page**: Contains components like `SubmitButton`, `LoginPage`, and `LogoutModal` to facilitate user interactions.
- **Dashboard**: For logged-in users, showing personalized content and a sidebar for navigation within the dashboard.
- **Error Handling**: A generic error component is used to display errors and provide a retry mechanism.

### Navigation and Layout

- **Navbar**: A responsive navbar for the landing page and possibly other public pages.
- **Sidebar**: A collapsible sidebar for the dashboard, indicating a more complex, multi-page application structure for authenticated users.

## Coding Standards

- Use **functional components** and **hooks** to avoid class components.
- Variable declarations should prioritize `const` over `let`.
- Variable and function names use **camelCase**, while component names use **PascalCase**.

## Preferred Libraries

- **Next.js** for navigation and server-side rendering.
- **Tailwind CSS** for responsive design.
- **Shadcn/UI** as a UI component library.
- **Next Intl** for internationalization support.

## File Structure

- **Messages**: Multilingual translation JSON files.
- **Src/components**: Reusable UI components.
- **src/app/[locale]**: NextJS pages that support multiple languages.
- **Src/app/app**: Store API service functions.
- **Src/lib**: Store utility functions.
- **Data**: Stores JSON and Markdown files for content management.
- **Public**: Static resources.
- **styles**: Tailwind CSS configuration and global styles.

## Performance Optimization Guide

- Use **React.memo** on pure function components.
- Implement **lazy loading** of routing components.
- Optimize `useEffect` dependencies to prevent unnecessary re-rendering.

## Testing Requirements

- Write unit tests using **Jest** and **React Testing Library**.
- The test coverage should reach at least **80%**.
- Use **snapshot testing** for UI components.

## Documentation Specifications

- Write comments for functions and components in **JSDoc** format.
- Components must include **PropTypes** validation.
- Each main directory must contain a **README.md** file.
- Provide both **English** and **Chinese** versions of the README.md file.

## Error Handling

- Use **try/catch** blocks to handle asynchronous operations.
- Implement a **global error boundary** component.
