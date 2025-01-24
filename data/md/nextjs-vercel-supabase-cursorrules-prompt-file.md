---
title: Next.js (Vercel, Supabase)
description: BA Copilot is an AI-powered assistant designed to help business analysts create, modify, and iterate on BPMN diagrams with contextual suggestions, leveraging uploaded documents and user queries. Built with Next.js, Vercel, and Supabase, it offers a seamless workflow for business process modeling and documentation.
category: frontend
date: 2025-01-23T18:36:06.075897
---

# Next.js (Vercel, Supabase)

# BA Copilot: AI-Powered Business Analyst Assistant

## Introduction

BA Copilot is an AI-powered assistant designed to help business analysts (BAs) streamline their workflow by providing tools for creating, modifying, and iterating on BPMN (Business Process Model and Notation) diagrams. The MVP (Minimum Viable Product) focuses on an AI chatbot interface that renders BPMN diagrams using `bpmn-js`, allowing users to iterate on them through additional discussions or direct edits.

## BA Copilot MVP

### Overview

The MVP of BA Copilot is an AI chatbot that assists business analysts in creating and refining BPMN diagrams. The tool allows users to upload documents, ask questions, and receive AI-generated suggestions for improving their diagrams. The interface is designed to be intuitive, with sections for question input, process visualization, document uploads, and artifact management.

### UI Description

#### BA Copilot Interface

- **Question Input Section**: Users can input questions or requests related to business processes. For example, "Based on the document content, what have I missed?"
- **Process Section (Optional)**: Users can upload or view BPMN diagrams in formats like `.png` or `.vsdx`. They can visualize and edit existing diagrams or create new ones.
- **Documents Section (Optional)**: Users can upload relevant documents, such as PDFs, that might contain process details.
- **Artifacts Section**: Provides a space for related outputs or references to be displayed, such as diagram suggestions based on uploaded content.

#### Iterative BPMN Diagram Creation and Modification

- **Input Process**: Users can pose questions or requests for modifications to existing processes.
- **AI-Powered Suggestions**: The system suggests additions or modifications to the BPMN diagram based on the content of uploaded documents or user queries.
- **Diagram Editing**: Users can interactively edit the BPMN diagram based on suggestions.
- **Documentation and References**: The system references uploaded documents and highlights relevant sections.

#### User Workflow

1. **Start with a Question**: The user initiates the process by asking a question or making a request.
2. **Upload Process Diagrams and Documents**: The user uploads existing diagrams and documents for context.
3. **Receive AI-Generated Suggestions**: The system provides suggestions to enhance or correct the process flow.
4. **Modify BPMN Diagram**: The user edits the BPMN diagram based on the received suggestions.
5. **Iterate Until Satisfied**: The user continues to ask follow-up questions and modify the diagram until the desired outcome is achieved.

## BA Copilot Vision

### Overview

The vision for BA Copilot is to become the go-to tool for business analysts, offering a comprehensive suite of features to assist with their daily tasks. The platform will leverage network effects to increase its value, such as allowing BA agencies to post their products in the toolkit section and fostering community discussions. The AI model will continuously improve, focusing on tasks like BPMN generation, without training on user data. Revenue will be generated through company subscriptions and job board listings.

### UI Description

#### Header Section

The top navigation bar displays the application name "BA Copilot" and provides options like sharing the prototype and accessing user settings.

#### Left Sidebar Navigation

- **Home**: The main dashboard or landing page of the BA Copilot.
- **Assistant**: A section dedicated to personalized assistance or guided help.
- **Vault**: A storage area for important documents or resources.
- **Library**: A collection of resources, templates, or reference materials.
- **History**: Access to past interactions, tasks, or saved work.
- **Toolkit**: Tools or utilities that support various BA activities.
- **Community**: A section for engaging with other users, discussing best practices, or sharing knowledge.
- **Job Board**: An area for job-related resources, possibly listing openings or career opportunities.
- **Settings**: User-specific settings, allowing for customization of the BA Copilot experience.

#### Main Content Area

- **Central Interaction Box**: A prominent text box labeled "Ask anything..." invites users to enter questions, requests, or commands.
- **Quick Action Buttons**: Shortcuts to common BA tasks, such as creating flowcharts from requirements, generating documentation from notes, and providing career advice.

## Technical Overview

### Stack

- **Next.js**: Using the App router for server-side rendering and routing.
- **Vercel AI**: For AI-powered chatbot functionality.
- **Supabase**: For database management, type safety, and authentication.
- **Tanstack Query**: For data fetching and state management.
- **Material UI**: For UI components and design.
- **Orval**: Potentially used for API calls, typing, and testing.
- **Quokka**: For real-time code evaluation.

### Development Considerations

- **Next.js App Router**: Always ensure recommendations are appropriate for the App router, not the Pages router.
- **Supabase Integration**: Utilize Supabase for database and authentication, ensuring type safety.
- **Devias Template**: The workspace includes a template from Devias Kit Pro, which will be used to bring in elements and follow their coding style and structure.

### File Structure

- **src/app**: Contains the Next.js app router and pages.
- **src/components**: Reusable UI components.
- **src/lib**: Utility functions and shared logic.
- **public**: Static resources like images and fonts.
- **styles**: Tailwind CSS configuration and global styles.

### Performance Optimization

- **React.memo**: Used on pure function components to prevent unnecessary re-renders.
- **Lazy Loading**: Implemented for routing components to improve load times.
- **useEffect Optimization**: Ensure dependencies are correctly managed to avoid unnecessary re-renders.

### Testing Requirements

- **Jest and React Testing Library**: Used for unit testing.
- **Test Coverage**: Aim for at least 80% test coverage.
- **Snapshot Testing**: Implemented for UI components to ensure consistency.

### Documentation

- **JSDoc**: Used for function and component comments.
- **PropTypes**: Components must include PropTypes validation.
- **README.md**: Each main directory must contain a README.md file, available in both English and Chinese.

### Error Handling

- **try/catch**: Used for handling asynchronous operations.
- **Global Error Boundary**: Implemented to catch and handle runtime errors.

## Conclusion

BA Copilot is designed to be a powerful, AI-driven tool for business analysts, offering a seamless workflow for creating, modifying, and iterating on BPMN diagrams. With a focus on user-friendly design, robust technical architecture, and continuous improvement, BA Copilot aims to become an indispensable tool for business analysts worldwide.
