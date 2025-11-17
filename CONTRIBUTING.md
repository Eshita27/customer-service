# Contributing to Customer Service Microservice

Thanks for your interest in contributing! Here's how to get started:

## 🧭 Project Setup

1. Clone the repo
2. Run `npm install`
3. Run `npm run setup` to auto-copy `.env.example` to `.env`
4. Fill in your credentials in `.env`
5. Run `npx prisma generate` and `npm run dev`

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

## 🔍 Reviewer Notes

- This PR focuses solely on Swagger export and schema cleanup — no controller or service logic has been modified yet.
- Please verify:
    - Schema metadata coverage (examples, defaults)
    - Exported YAML structure in `docs/customer-service-v1.0.0.yaml`

## 🧠 Commit Style Guide

We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for clarity and automation.

Use these prefixes:
- `feat:` for new features (e.g., `feat: add Swagger export script`)
- `fix:` for bug fixes
- `chore:` for tooling, dependencies, or config
- `refactor:` for internal code improvements
- `docs:` for documentation updates

Keep commits atomic and scoped to a single concern.

Happy coding!