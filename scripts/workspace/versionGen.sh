#!/usr/bin/env bash
echo "┏━━━ 🚀 Versioning: $(pwd) ━━━━━━━━━━━━━━━━━━━"
lerna version --allow-branch --no-git-tag-version --allow-branch $(git branch --show-current)

