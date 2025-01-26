---
title: HTMX (Basic Setup)
description: A comprehensive guide to setting up HTMX with best practices, folder structure, and additional instructions for optimal performance and maintainability.
category: rules
date: 2025-01-23T18:44:18.278505
---


# HTMX (Basic Setup)

# HTMX Basic Setup and Best Practices

## HTMX Best Practices

```javascript
const htmxBestPractices = [
  "Use hx-get for GET requests",
  "Implement hx-post for POST requests",
  "Utilize hx-trigger for custom events",
  "Use hx-swap to control how content is swapped",
  "Implement hx-target to specify where to swap content",
  "Utilize hx-indicator for loading indicators",
];
```

## Folder Structure

```plaintext
src/
  templates/
  static/
    css/
    js/
  app.py
```

## Additional Instructions

1. **Use semantic HTML5 elements**: Ensure that your HTML structure is meaningful and accessible.
2. **Implement proper CSRF protection**: Protect your application from Cross-Site Request Forgery attacks.
3. **Utilize HTMX extensions when needed**: Extend HTMX functionality with available extensions.
4. **Use hx-boost for full page navigation**: Enhance navigation by using `hx-boost` for seamless page transitions.
5. **Implement proper error handling**: Ensure that your application gracefully handles errors.
6. **Follow progressive enhancement principles**: Build your application to work for all users, regardless of their browser capabilities.
7. **Use server-side templating (e.g., Jinja2, Handlebars)**: Leverage server-side templating engines for dynamic content rendering.

## Conclusion

By following these best practices and guidelines, you can ensure that your HTMX setup is efficient, maintainable, and scalable. Happy coding!
