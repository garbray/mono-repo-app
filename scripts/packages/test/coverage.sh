#!/usr/bin/env bash
echo "┏━━━ 🎯 TEST - Coverage report: $(pwd) ━━━━━━━━━━━━━━━━━━━"
yarn jest --runInBand --coverage

