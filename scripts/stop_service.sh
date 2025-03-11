#!/bin/bash
echo "Stopping the systemd service..."
sudo pkill -f "npm run start" || echo "Service not running."