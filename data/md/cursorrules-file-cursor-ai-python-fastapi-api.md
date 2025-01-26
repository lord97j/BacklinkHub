---
title: Python (FastAPI)
description: Comprehensive guidelines for developing scalable, maintainable, and high-performance APIs using Python and FastAPI. Includes best practices for coding standards, error handling, performance optimization, and dependency management.
category: rules
date: 2025-01-23T18:47:16.397611
---


# Python (FastAPI)

# Python (FastAPI) - Scalable API Development Guide

## Key Principles
- **Concise, Technical Responses**: Provide accurate Python examples in a concise manner.
- **Functional, Declarative Programming**: Avoid classes where possible; prefer functional programming.
- **Modularization**: Iterate and modularize code to avoid duplication.
- **Descriptive Variable Names**: Use auxiliary verbs (e.g., `is_active`, `has_permission`).
- **File Naming**: Use lowercase with underscores for directories and files (e.g., `routers/user_routes.py`).
- **Named Exports**: Favor named exports for routes and utility functions.
- **RORO Pattern**: Use the Receive an Object, Return an Object (RORO) pattern.

## Python/FastAPI
- **Function Definitions**: Use `def` for pure functions and `async def` for asynchronous operations.
- **Type Hints**: Use type hints for all function signatures. Prefer Pydantic models over raw dictionaries for input validation.
- **File Structure**: Organize files into exported router, sub-routes, utilities, static content, and types (models, schemas).
- **Conditional Statements**: Avoid unnecessary curly braces. For single-line statements, omit curly braces (e.g., `if condition: do_something()`).

## Error Handling and Validation
- **Prioritize Error Handling**: Handle errors and edge cases at the beginning of functions.
- **Early Returns**: Use early returns for error conditions to avoid deeply nested if statements.
- **Happy Path Last**: Place the happy path last in the function for improved readability.
- **Guard Clauses**: Use guard clauses to handle preconditions and invalid states early.
- **Error Logging**: Implement proper error logging and user-friendly error messages.
- **Custom Error Types**: Use custom error types or error factories for consistent error handling.

## Dependencies
- **FastAPI**: Core framework for building APIs.
- **Pydantic v2**: For input validation and response schemas.
- **Async Database Libraries**: Use `asyncpg` or `aiomysql` for asynchronous database operations.
- **SQLAlchemy 2.0**: If using ORM features.

## FastAPI-Specific Guidelines
- **Functional Components**: Use plain functions and Pydantic models for input validation and response schemas.
- **Declarative Route Definitions**: Use clear return type annotations.
- **Lifespan Context Managers**: Minimize `@app.on_event("startup")` and `@app.on_event("shutdown")`; prefer lifespan context managers.
- **Middleware**: Use middleware for logging, error monitoring, and performance optimization.
- **Performance Optimization**: Optimize for performance using async functions for I/O-bound tasks, caching strategies, and lazy loading.
- **HTTPException**: Use `HTTPException` for expected errors and model them as specific HTTP responses.
- **Pydantic's BaseModel**: Use for consistent input/output validation and response schemas.

## Performance Optimization
- **Minimize Blocking I/O**: Use asynchronous operations for all database calls and external API requests.
- **Caching**: Implement caching for static and frequently accessed data using tools like Redis or in-memory stores.
- **Data Serialization**: Optimize data serialization and deserialization with Pydantic.
- **Lazy Loading**: Use lazy loading techniques for large datasets and substantial API responses.

## Key Conventions
1. **Dependency Injection**: Rely on FastAPI’s dependency injection system for managing state and shared resources.
2. **API Performance Metrics**: Prioritize response time, latency, and throughput.
3. **Non-Blocking Operations**: Limit blocking operations in routes; favor asynchronous and non-blocking flows.
4. **Clear Structure**: Structure routes and dependencies clearly to optimize readability and maintainability.

Refer to the [FastAPI documentation](https://fastapi.tiangolo.com/) for best practices on Data Models, Path Operations, and Middleware.
