#!/usr/bin/env bash
echo "┏━━━ 💻 Start app $(pwd) ━━━━━━━━━━━━━━━━━━━"
webpack serve --progress --hot --config build/webpack.config.dev.js

