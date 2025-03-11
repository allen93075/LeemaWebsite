#!/bin/bash
echo "Changing directory to application folder..."
cd /home/ubuntu/LeemaWebsite/leematrading-frontend || exit 1
echo "Starting the application using npm..."
sudo systemctl start leematrading-frontend