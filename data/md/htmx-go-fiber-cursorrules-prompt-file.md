---
title: Go with Fiber
description: Best practices and guidelines for integrating HTMX with Go and Fiber, including project structure, coding standards, and performance optimization.
category: backend
date: 2025-01-23T18:44:07.491631
---

# Go with Fiber

# HTMX with Go and Fiber .cursorrules

## Best Practices

```javascript
const htmxGoFiberBestPractices = [
  "Use Fiber's HTML rendering for server-side templates",
  "Implement Fiber's routing system for HTMX requests",
  "Utilize Fiber's middleware for request processing",
  "Use Fiber's JSON methods for API responses",
  "Implement proper error handling with Fiber's error handling",
  "Utilize Fiber's static file serving for assets",
];
```

## Folder Structure

```javascript
const folderStructure = `
cmd/
  main.go
internal/
  handlers/
  models/
  templates/
static/
  css/
  js/
go.mod
go.sum
`;
```

## Additional Instructions

```javascript
const additionalInstructions = `
1. Use Fiber's App.Get/Post/etc for routing HTMX requests
2. Implement CSRF protection with Fiber middleware
3. Utilize Fiber's Context for handling HTMX-specific headers
4. Use Fiber's template engine for server-side rendering
5. Implement proper logging with Fiber's Logger middleware
6. Follow Fiber's best practices for project structure
7. Use environment variables for configuration
`;
```

## Coding Standards

- Use Fiber's built-in methods for routing and middleware.
- Follow Go's idiomatic practices for error handling and logging.
- Use environment variables for configuration management.

## Performance Optimization

- Implement Fiber's middleware for efficient request processing.
- Use Fiber's static file serving for optimized asset delivery.
- Follow best practices for server-side rendering with Fiber's template engine.

## Testing Requirements

- Write unit tests using Go's testing package.
- Ensure test coverage is at least 80%.
- Use integration tests for HTMX-specific functionality.

## Documentation

- Document all handlers and middleware using GoDoc.
- Include a README.md file in the root directory with setup instructions.
- Provide examples for common use cases in the documentation.

## Error Handling

- Implement Fiber's error handling middleware for consistent error responses.
- Use Go's error wrapping for detailed error information.
- Log errors using Fiber's Logger middleware.

