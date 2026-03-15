# Production Dockerfile for AsyncOwl website (Next.js)

# ---- Dependencies ----
FROM node:22-bookworm-slim AS deps
WORKDIR /app
# Prevent io_uring syscalls that Docker's default seccomp profile blocks on many Linux hosts
ENV UV_USE_IO_URING=0
COPY package.json package-lock.json ./
RUN npm ci

# ---- Builder ----
FROM node:22-bookworm-slim AS builder
WORKDIR /app
ENV UV_USE_IO_URING=0
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Runner ----
FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
