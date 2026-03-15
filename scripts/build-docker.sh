#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/.."
docker compose build --no-cache
echo "Build done. Start with: docker compose up -d"
