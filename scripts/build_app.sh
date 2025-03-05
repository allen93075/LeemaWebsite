#!/bin/bash
echo "Changing directory to application folder..."
cd /home/ubuntu/LeemaWebsite/leematrading-frontend || exit 1
echo "Installing dependencies..."
npm install
echo "Building the application..."
npm run build
