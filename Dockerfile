# Production Dockerfile for AsyncOwl website (Next.js)

# ---- Dependencies ----
# Use Google's Docker Hub mirror to avoid intermittent Docker Hub 5xx pulls on some servers.
ARG NODE_IMAGE=mirror.gcr.io/library/node:22-bookworm-slim
FROM ${NODE_IMAGE} AS deps
WORKDIR /app
# Prevent io_uring syscalls that Docker's default seccomp profile blocks on many Linux hosts
ENV UV_USE_IO_URING=0
COPY package.json package-lock.json ./
RUN npm ci

# ---- Builder ----
FROM ${NODE_IMAGE} AS builder
WORKDIR /app
ENV UV_USE_IO_URING=0
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Runner ----
FROM ${NODE_IMAGE} AS runner
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
