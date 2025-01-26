---
title: React (MobX)
description: Best practices and guidelines for using React with MobX for scalable and efficient state management.
category: rules
date: 2025-01-23T18:53:50.615214
---


# React (MobX)

# React + MobX .cursorrules

## Prefer Functional Components with Hooks
```javascript
const preferFunctionalComponents = true;
```

## MobX Best Practices
```javascript
const mobxBestPractices = [
  "Use MobX-react-lite for optimal performance with functional components",
  "Implement stores for managing application state",
  "Utilize computed values for derived state",
  "Use actions for modifying observable state",
  "Implement proper error handling in asynchronous actions"
];
```

## Folder Structure
```javascript
const folderStructure = `
src/
  components/
  stores/
  hooks/
  pages/
  utils/
`;
```

## Additional Instructions
```javascript
const additionalInstructions = `
1. Use TypeScript for type safety with MobX
2. Implement strict mode for MobX for better debugging
3. Use observer HOC or useObserver hook for reactive components
4. Implement proper dependency injection for stores
5. Use reaction for side-effects based on observable changes
6. Utilize MobX DevTools for debugging
7. Follow MobX best practices for scalable state management
`;
```

## Performance Optimization
- Use `React.memo` for pure functional components to prevent unnecessary re-renders.
- Implement lazy loading for components and stores to improve initial load time.
- Optimize `useEffect` dependencies to minimize re-renders.

## Testing Requirements
- Write unit tests using Jest and React Testing Library.
- Ensure test coverage is at least 80%.
- Use snapshot testing for UI components.

## Documentation Standards
- Use JSDoc for documenting functions and components.
- Include PropTypes validation for components.
- Each main directory should contain a README.md file explaining its purpose.
- Provide both English and Chinese versions of the README.md files.

## Error Handling
- Use `try/catch` blocks for handling asynchronous operations.
- Implement a global error boundary component to catch runtime errors.

