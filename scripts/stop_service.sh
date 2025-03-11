#!/bin/bash
echo "Stopping the systemd service..."
sudo fuser -k 80/tcp || echo "No process is using port 80."
sudo pkill -f "npm run start" || echo "No process is running npm run start."
echo "Service stopped successfully."
echo "Stopping the application..."