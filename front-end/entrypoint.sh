#!/bin/sh

cd /front-end
npm run docker:start || {
  npm install
  npm run docker:start
}
