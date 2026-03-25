#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

LOG_FILE="$(mktemp)"
trap 'rm -f "$LOG_FILE"' EXIT

echo "Building with BuildKit..."
if docker compose build --no-cache 2>&1 | tee "$LOG_FILE"; then
  echo "Build done. Start with: docker compose up -d"
  exit 0
fi

if grep -q "errno 524" "$LOG_FILE"; then
  echo ""
  echo "Detected seccomp errno 524 on this host."
  echo "Retrying with legacy Docker builder (BuildKit disabled)..."
  echo ""
  DOCKER_BUILDKIT=0 COMPOSE_DOCKER_CLI_BUILD=0 docker compose build --no-cache
  echo "Build done. Start with: docker compose up -d"
  exit 0
fi

if grep -Eq "error pulling image configuration|received unexpected HTTP status: 500|toomanyrequests|TLS handshake timeout|i/o timeout" "$LOG_FILE"; then
  echo ""
  echo "Detected transient registry/network pull failure."
  echo "Retrying build once..."
  echo ""
  docker compose build --no-cache
  echo "Build done. Start with: docker compose up -d"
  exit 0
fi

echo ""
echo "Build failed for a reason other than errno 524."
exit 1
