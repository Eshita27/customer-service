# Customer Service Microservice

A modular, TypeScript-based microservice for managing customer data using Express, Prisma, and PostgreSQL.

## 🚀 Features

- Full CRUD operations
- Advanced query filters (channel, tier, gender, flavors, date ranges)
- Zod-based validation with custom error messages
- Enum safety with Prisma
- Soft delete support
- Scalable architecture with service and validator layers

## 🛠️ Tech Stack

- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL
- Zod (validation)
- ts-node-dev (dev runner)

## 📦 Setup

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev