#!/usr/bin/env sh

set -e

npm run build

cd dist

git init

git add -A

git commit -m "Completed build deployed to gh-pages 0.0"

git push -f git@github.com:AndresBarrosoDev/Valentinna-Salon.git master:gh-pages

cd -

…or push an existing repository from the command line
    git remote add origin git@github.com:AndresBarrosoDev/Valentinna-Salon.git
    git branch -M master
    git push -u origin master