#!/usr/bin/env bash
# Build the Docker image with seccomp disabled (fixes errno 524 on some hosts).
# Use this if: docker compose build --no-cache fails with "error loading seccomp filter".
# Then run: docker compose up -d

set -e
cd "$(dirname "$0")/.."
docker build --security-opt seccomp=unconfined --no-cache -t async-owl-website:latest .
echo "Build done. Start with: docker compose up -d"
