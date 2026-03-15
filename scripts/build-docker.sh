#!/usr/bin/env bash
# Build the Docker image (uses seccomp=unconfined so build works on all hosts).
# Then run: docker compose up -d

set -e
cd "$(dirname "$0")/.."
export DOCKER_BUILDKIT=1
docker build --no-cache -t async-owl-website:latest .
echo "Build done. Start with: docker compose up -d"
