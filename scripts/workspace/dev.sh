#!/usr/bin/env bash
echo "┏━━━ 📦 building app $(pwd) ━━━━━━━━━━━━━━━━━━━"
lerna run start --scope @garbray/app --stream

