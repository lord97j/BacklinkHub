---
title: React (Redux, TypeScript)
description: A comprehensive guide for developing React applications using Redux for state management and TypeScript for type safety. This includes best practices, folder structure, and coding standards.
category: rules
date: 2025-01-23T18:53:38.639063
---


# React (Redux, TypeScript)

# React + Redux + TypeScript .cursorrules

## Prefer Functional Components with Hooks
```javascript
const preferFunctionalComponents = true;
```

## Use TypeScript for Type Safety
```javascript
const useTypeScript = true;
```

## Redux Best Practices
```javascript
const reduxBestPractices = [
  "Use Redux Toolkit for efficient Redux development",
  "Implement slice pattern for organizing Redux code",
  "Utilize createAsyncThunk for handling async actions",
  "Use selectors for accessing state in components",
];
```

## Folder Structure
```javascript
const folderStructure = `
src/
  components/
  features/
  store/
    slices/
    hooks.ts
    store.ts
  types/
  utils/
`;
```

## Additional Instructions
```javascript
const additionalInstructions = `
1. Use React.FC for functional components with props
2. Implement strict TypeScript checks
3. Use Redux hooks (useSelector, useDispatch) in components
4. Create reusable typed hooks for Redux operations
5. Implement proper error handling in async operations
6. Use Redux DevTools for debugging
7. Follow Redux style guide for naming conventions
`;
```

### Detailed Guidelines

1. **Functional Components**: Always prefer functional components with hooks over class components.
2. **TypeScript**: Utilize TypeScript to enforce type safety and reduce runtime errors.
3. **Redux Toolkit**: Use Redux Toolkit to simplify Redux code and improve development efficiency.
4. **Slice Pattern**: Organize Redux code using the slice pattern for better maintainability.
5. **Async Actions**: Handle asynchronous actions using `createAsyncThunk`.
6. **Selectors**: Use selectors to access state in components for better performance and readability.
7. **Folder Structure**: Maintain a clean and organized folder structure to enhance code readability and maintainability.
8. **TypeScript Checks**: Implement strict TypeScript checks to catch errors early in the development process.
9. **Redux Hooks**: Use `useSelector` and `useDispatch` hooks in components for interacting with the Redux store.
10. **Reusable Hooks**: Create reusable typed hooks for Redux operations to reduce code duplication.
11. **Error Handling**: Implement proper error handling in asynchronous operations to ensure robustness.
12. **Redux DevTools**: Use Redux DevTools for debugging and monitoring the state of your application.
13. **Naming Conventions**: Follow the Redux style guide for naming conventions to maintain consistency across the codebase.

