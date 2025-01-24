---
title: Next.js (TypeScript, Tailwind)
description: Astral is the Block Explorer for the Autonomys Network, built with Next.js, TypeScript, and Tailwind CSS. It provides a responsive and accessible interface for exploring blockchain data, integrating advanced libraries for state management, UI components, and data fetching.
category: frontend
date: 2025-01-23T18:35:32.176022
---

# Next.js (TypeScript, Tailwind)

# Project Overview

Astral is the Block Explorer for the Autonomys Network, a decentralized infrastructure designed to support AI-powered decentralized applications (dApps). Built using **Next.js** and **TypeScript**, Astral integrates various libraries for state management, UI components, and data fetching. The project emphasizes **type safety**, **responsive design**, and **accessibility**, leveraging **Tailwind CSS** for styling.

## Key URLs

- **Astral Block Explorer**: [https://explorer.autonomys.xyz/](https://explorer.autonomys.xyz/)
- **GitHub Repository**: [https://github.com/autonomys/astral](https://github.com/autonomys/astral)
- **Autonomys Network**: [https://autonomys.xyz/](https://autonomys.xyz/)
- **Academy**: [https://academy.autonomys.xyz/](https://academy.autonomys.xyz/)
- **Documentation**: [https://docs.autonomys.xyz/](https://docs.autonomys.xyz/)

## Project Structure

- **Components**: Contains reusable UI components.
- **App**: Next.js app for routing and server-side rendering.
- **Hooks**: Custom React hooks for state management.
- **Lib**: Utility functions and shared logic.
- **Styles**: Tailwind CSS configuration and global styles.
- **Data**: JSON and Markdown files for content management.

## Development Guidelines

- Use **TypeScript** for type safety and maintainability.
- Follow the coding standards defined in the **ESLint** configuration.
- Ensure all components are **responsive** and **accessible**.
- Use **Tailwind CSS** for styling, adhering to the defined color palette.
- Write **JSDoc** comments for functions and components.
- Implement **PropTypes** validation for components.
- Use **React.memo** for pure function components to optimize performance.
- Implement **lazy loading** for routing components.
- Optimize **useEffect** dependencies to prevent unnecessary re-renders.

## Important Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `test`: Runs unit tests using **Jest** and **React Testing Library**.
- `lint`: Runs ESLint to ensure code quality.

## AI Interaction Guidelines

- When generating code, prioritize **TypeScript** and **React** best practices.
- Ensure that any new components are **reusable** and follow the existing design patterns.
- Minimize the use of AI-generated comments; instead, use **clearly named variables and functions**.
- Always validate user inputs and handle errors gracefully.
- Use the existing components and pages as a reference for new components and pages.

## Lexicon of Terms and Concepts

- **H+AI (Human + Artificial Intelligence)**: The collaboration between humans and AI to enhance capabilities and ensure a harmonious coexistence.
- **Autonomys Network**: A decentralized network designed to provide infrastructure for AI-powered decentralized applications (dApps).
- **deAI Ecosystem**: A stack of components that includes distributed storage, compute, and a dApp/agent layer for building and deploying AI applications.
- **Distributed Storage**: A system ensuring data integrity and availability for AI-related data.
- **Distributed Compute**: Scalable computational resources for AI training and inference.
- **dApp (Decentralized Application)**: Applications that run on a decentralized network, providing enhanced security and transparency.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Autonomys Overview](https://autonomys.xyz/)

## Testing Requirements

- Write unit tests using **Jest** and **React Testing Library**.
- Ensure test coverage reaches at least **80%**.
- Use **Snapshot Testing** for UI components to detect unintended changes.

## Error Handling

- Use **try/catch** blocks to handle asynchronous operations.
- Implement a **global error boundary** component to catch runtime errors.

## Documentation

- Each main directory must contain a **README.md** file.
- Provide both **English** and **Chinese** versions of the README.md file.
- Use **JSDoc** format for function and component documentation.

## Performance Optimization

- Use **React.memo** for pure function components.
- Implement **lazy loading** for routing components.
- Optimize **useEffect** dependencies to prevent unnecessary re-renders.

## Preferred Libraries

- **Next.js** for navigation and server-side rendering.
- **Tailwind CSS** for responsive design.
- **Shadcn/UI** as the UI component library.
- **Next Intl** for internationalization support.

## File Structure

- **Messages**: Multilingual translation JSON files.
- **Src/components**: Reusable UI components.
- **src/app/[locale]**: Next.js pages supporting multiple languages.
- **src/app/api**: API service functions.
- **src/lib**: Utility functions.
- **Data**: JSON and Markdown files for content management.
- **Public**: Static resources.
- **styles**: Tailwind CSS configuration and global styles.
