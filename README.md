Basic project template that makes it easier to be more productive right out the gate.

# Getting Started

By default this template uses `yarn` for package management. This is not required to use but yarn offers a bit of a performance increase over `npm`. You can install yarn from here: [https://yarnpkg.com/](https://yarnpkg.com/)

First step is to install the required deps:

```bash
yarn install
```

You'll need to make a copy of the example environment file into your local `.env` file (please read more about this here: [Environment Variables](./docs/EnvironmentVariables.md))

```bash
cp .env.example .env
```

During your initial setup process, you will need to ensure that your DB is setup properly.

- The first thing you need to do is get your [Docker](./docs/Docker.md) container setup and started:

```bash
yarn dev:docker
```

- Run your migrations by using the following command:

```bash
yarn db:migrate:dev
```

You should now be able to start the dev environment fully. This will concurrently start your Docker container and NextJS server.

```bash
yarn dev
```

The new project should now be available on: [localhost:3000](http://localhost:3000)

## Core Tech

The core foundation of the template is built with the following:

- **[Next.js](https://nextjs.org/)**
- **[Prisma](https://www.prisma.io/)**
- **[TypeScript](https://www.typescriptlang.org/)**

The rest of the stuff listed was used to implement the features included in the template:

- **[Tailwind](https://tailwindcss.com/)**
- **[React Hook Form](https://react-hook-form.com/)**
- **[NextAuth.js](https://next-auth.js.org/)**

## Features

- Auth with NextAuth.js
- Authenticated routes and data.
- Pre-configured Next.js API routes

## Production Deployment

To deploy this application in production, ensure you have the following:

- Use a managed PostgreSQL database service instead of the local Docker container.
- Update the `.env` file with your production database connection string and other sensitive information.
- Ensure that your application is secured with HTTPS and that sensitive data is not exposed.
- Consider using a CDN for static assets and caching strategies for performance.

