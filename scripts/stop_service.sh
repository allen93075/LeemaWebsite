#!/bin/bash
echo "Stopping the systemd service..."
sudo systemctl stop leematrading-frontend
echo "Service stopped successfully."
echo "Stopping the application..."