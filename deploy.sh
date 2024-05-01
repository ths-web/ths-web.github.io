#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs
cp index.html 404.html

echo 'ths-web.co.jp' > CNAME