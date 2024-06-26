#!/bin/bash

# Path to the virtual environment directory
VENV_DIR="venv"

# Check if the first parameter is "debug"
if [ "$1" == "-d" ]; then
    FLASK_ENV="development"
    echo "Debug mode is enabled"
fi

# Check if the virtual environment directory exists
if [ ! -d "$VENV_DIR" ]; then
    echo "Virtual environment not found. Creating one..."
    # Create the virtual environment
    python -m venv $VENV_DIR
fi

# Activate the virtual environment
echo "Activating the virtual environment..."
source $VENV_DIR/bin/activate

# Install or upgrade packages
echo "Installing/upgrading packages from requirements.txt..."
pip install --upgrade -r requirements.txt

echo "Setting up FLASK_APP environment variables..."
export FLASK_APP=to_do_app.py
export FLASK_ENV=$FLASK_ENV

echo "Setup complete."
