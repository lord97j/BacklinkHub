---
title: React Native Expo
description: Comprehensive guidelines and best practices for developing React Native applications using Expo. Includes coding standards, folder structure, and additional instructions for optimal development.
category: mobile
date: 2025-01-23T18:50:28.122189
---

# React Native Expo

# React Native Expo .cursorrules

## React Native Expo Best Practices

```javascript
const reactNativeExpoBestPractices = [
  "Use functional components with hooks",
  "Utilize Expo SDK features and APIs",
  "Implement proper navigation using React Navigation",
  "Use Expo's asset system for images and fonts",
  "Implement proper error handling and crash reporting",
  "Utilize Expo's push notification system"
];
```

## Folder Structure

```javascript
const folderStructure = `
assets/
src/
  components/
  screens/
  navigation/
  hooks/
  utils/
App.js
app.json
`;
```

## Additional Instructions

```javascript
const additionalInstructions = `
1. Use TypeScript for type safety
2. Implement proper styling using StyleSheet
3. Utilize Expo's vector icons
4. Use Expo's secure store for sensitive data
5. Implement proper offline support
6. Follow React Native best practices for performance
7. Use Expo's OTA updates for quick deployments
`;
```

### Coding Standards
- Use functional components with hooks
- Variable declarations should prioritize `const` over `let`
- Variable and function names use camelCase specification, component names use PascalCase

### Preferred Libraries
- Using React Navigation for navigation
- Using Expo SDK for accessing device features
- Using TypeScript for type safety
- Using StyleSheet for styling

### Performance Optimization Guide
- Using `React.memo` on pure function components
- Implementing lazy loading of routing components
- Optimize `useEffect` dependencies to prevent unnecessary re-rendering

### Testing Requirements
- Write unit tests using Jest and React Testing Library
- The test coverage should reach at least 80%
- Use snapshot testing for UI components

### Document Specifications
- Write comments for functions and components in JSDoc format
- Components must include PropTypes validation
- Each main directory must contain a README.md file
- Provide both English and Chinese versions of the README.md file

### Error Handling
- Using `try/catch` blocks to handle asynchronous operations
- Implement global error boundary component
