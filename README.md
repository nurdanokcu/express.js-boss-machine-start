# Boss Machine API

A backend REST API built with **Node.js** and **Express.js** for managing a fictional Boss Machine system. This project provides endpoints to manage **minions**, **ideas**, and **meetings**, with support for CRUD operations, custom middleware, and server-side validation.

## Overview

Boss Machine API is designed as a backend application that simulates a management system for an evil entrepreneur. It allows users to create, read, update, and delete resources such as minions and ideas, while also handling automatically generated meetings.

This project focuses on core backend development concepts including:

- RESTful API design
- Express.js routing
- Middleware usage
- Request validation
- Error handling
- Modular project structure

## Features

- Built with **Express.js**
- Full CRUD functionality for:
  - Minions
  - Ideas
  - Meetings
- Custom middleware for validating idea profitability
- Organized route structure
- In-memory database helper functions
- API testing for core functionality and edge cases

## Tech Stack

- **Node.js**
- **Express.js**
- **JavaScript**
- **CORS**
- **Body-parser**

## Getting Started
```bash
npm install
```

## Run the Server
```bash
npm run start
```

## Testing
```bash
npm run test
```

## Testing
This project uses an in-memory database, so data resets when the server restarts.
Meetings are generated automatically by the server.
The project emphasizes backend logic rather than frontend styling.