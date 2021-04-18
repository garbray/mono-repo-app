#!/usr/bin/env bash
echo "┏━━━ 📦 Building $(pwd) ━━━━━━━━━━━━━━━━━━━"
lerna run build --scope @garbray/types
echo "┏━━━ 🩹 Linking $(pwd) ━━━━━━━━━━━━━━━━━━━━"
lerna link


