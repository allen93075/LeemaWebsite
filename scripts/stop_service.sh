#!/bin/bash
echo "Stopping the systemd service..."
sudo pkill -f "next start" || echo "Service not running."