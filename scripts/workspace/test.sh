#!/usr/bin/env bash
echo "┏━━━ 🎯 TEST: $(pwd) ━━━━━━━━━━━━━━━━━━━"
yarn lerna run test --ignore @garbray/prettier-config --stream

