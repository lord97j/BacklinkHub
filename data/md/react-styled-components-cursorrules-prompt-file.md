---
title: React (Styled Components)
description: Optimize your React projects using Styled Components with best practices, folder structure, and coding standards.
category: rules
date: 2025-01-23T18:53:10.586059
---


# React (Styled Components)

# React + Styled Components .cursorrules

## Prefer Functional Components with Hooks
```javascript
const preferFunctionalComponents = true;
```

## Styled Components Best Practices
```javascript
const styledComponentsBestPractices = [
  "Use the styled-components/macro for better debugging",
  "Implement a global theme using ThemeProvider",
  "Create reusable styled components",
  "Use props for dynamic styling",
  "Utilize CSS helper functions like css`` when needed",
];
```

## Folder Structure
```javascript
const folderStructure = `
src/
  components/
    styled/
  styles/
    theme.js
    globalStyles.js
  pages/
  utils/
`;
```

## Additional Instructions
```javascript
const additionalInstructions = `
1. Use proper naming conventions for styled components (e.g., StyledButton)
2. Implement a consistent theming system
3. Use CSS-in-JS for all styling needs
4. Utilize styled-components' attrs method for frequently used props
5. Implement proper TypeScript support for styled-components
6. Use the css prop for conditional styling when appropriate
7. Follow the styled-components documentation for best practices
`;
```

## Performance Optimization
- Use `React.memo` for functional components to prevent unnecessary re-renders.
- Implement lazy loading for large components.
- Optimize `useEffect` dependencies to avoid unnecessary side effects.

## Testing Requirements
- Write unit tests using Jest and React Testing Library.
- Ensure test coverage is at least 80%.
- Use snapshot testing for UI components.

## Documentation
- Use JSDoc for function and component comments.
- Include PropTypes validation for components.
- Maintain a README.md file in each main directory.
- Provide both English and Chinese versions of the README.md file.

## Error Handling
- Use `try/catch` blocks for asynchronous operations.
- Implement a global error boundary component to catch runtime errors.

