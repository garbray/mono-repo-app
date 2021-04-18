#!/usr/bin/env bash
echo "┏━━━ 📦 building app $(pwd) ━━━━━━━━━━━━━━━━━━━"
webpack --config build/webpack.config.prod.js

