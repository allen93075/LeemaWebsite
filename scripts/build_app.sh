#!/bin/bash
echo "Changing directory to application folder..."
cd /home/ubuntu/LeemaWebsite/leematrading-frontend || exit 1
echo "Installing dependencies..."
sudo npm install
echo "Building the application..."
sudo npm run build
