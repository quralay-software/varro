# syntax = docker/dockerfile:1

# Base stage for all builds
FROM node:18-alpine AS base
WORKDIR /app

# Dependencies stage
FROM base AS dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Development stage
FROM base AS development
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
CMD ["yarn", "dev"]

# Build stage
FROM base AS builder
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Production stage
FROM base AS production
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/next.config.js ./

CMD ["yarn", "start"]
