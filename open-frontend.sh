#!/bin/bash

# Function to open URL in default browser for Linux
open_linux() {
    if which xdg-open > /dev/null; then
        xdg-open "$1"
    elif which gnome-open > /dev/null; then
        gnome-open "$1"
    elif which kde-open > /dev/null; then
        kde-open "$1"
    else
        echo "Could not detect default browser on Linux."
        exit 1
    fi
}

# Function to open URL in default browser for macOS
open_macos() {
    if which open > /dev/null; then
        open "$1"
    else
        echo "Could not detect default browser on macOS."
        exit 1
    fi
}

# Function to open URL in default browser for Windows
open_windows() {
    if which start > /dev/null; then
        start "$1"
    else
        echo "Could not detect default browser on Windows."
        exit 1
    fi
}

# Main function to detect OS and open URL
open_frontend() {
    url=$1
    os=$(uname)

    case $os in
        Linux*)   open_linux "$url" ;;
        Darwin*)  open_macos "$url" ;;
        CYGWIN*)  open_windows "$url" ;;
        MINGW*)   open_windows "$url" ;;
        *)        echo "Unsupported operating system: $os"; exit 1 ;;
    esac
}
