# Contributing to Customer Service Microservice

Thanks for your interest in contributing! Here's how to get started:

## 🧭 Project Setup

1. Clone the repo
2. Run `npm install`
3. Set up `.env` using `.env.example`
4. Run `npx prisma generate` and `npm run dev`

## 🧪 Testing Your Changes

- Use Postman or Swagger to test endpoints
- Validate inputs using Zod schemas
- Run `npm run dev` and check logs for errors

## 🧼 Code Style

- Use TypeScript
- Keep controllers lean — move logic to `services/`
- Use `validators/` for all input validation
- Follow RESTful conventions

## 📦 Branching

- Use `feature/`, `fix/`, or `chore/` prefixes
- Example: `feature/add-customer-tier-filter`

## ✅ Pull Requests

- Describe your changes clearly
- Reference related issues or features
- Include screenshots or payloads if relevant

Happy coding!