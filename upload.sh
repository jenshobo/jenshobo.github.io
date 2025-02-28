#!/bin/bash

# Define the directory, config file, and HTML file
DIRECTORY="Work"
CONFIG_FILE="parsed_files.conf"
HTML_FILE="path/to/your/file.html" # Change this to the actual path of your HTML file
IMAGES_DIR="./Import/Images"

# Check if the config file exists, create it if it doesn't
if [ ! -f "$CONFIG_FILE" ]; then
    touch "$CONFIG_FILE"
fi

# Create images directory if it doesn't exist
if [ ! -d "$IMAGES_DIR" ]; then
    mkdir -p "$IMAGES_DIR"
fi

# Read the contents of the config file into an array
mapfile -t parsed_files < "$CONFIG_FILE"

# Get the current year
current_year=$(date +"%Y")

# Ensure current year is tracked in the config file
if [[ ! " ${parsed_files[@]} " =~ " ${current_year} " ]]; then
    echo "$current_year" >> "$CONFIG_FILE"
fi

# Loop through each .md file in the Work directory
for file in "$DIRECTORY"/*.md; do
    # Check if the file exists (in case there are no .md files)
    if [ ! -e "$file" ]; then
        continue
    fi

    # Get just the filename without the path
    filename=$(basename "$file")

    # Check if the filename is in the parsed_files array
    if [[ ! " ${parsed_files[@]} " =~ " ${filename} " ]]; then
        # If not found, echo a message and add it to the config file
        echo "Adding $filename to $CONFIG_FILE"
        echo "$filename" >> "$CONFIG_FILE"

        # Prompt the user for an image file and a description
        echo "Please provide an image file for $filename:"
        read -r image_file
        cp "$image_file" "$IMAGES_DIR/"
        image_name=$(basename "$image_file")

        echo "Provide a short description for $filename:"
        read -r description

        # Prepare the new HTML content for image button
        new_div="<div class=\"image-button\">\n  <img src=\"./Import/Images/$image_name\" alt=\"Image\" class=\"button-image\" title=\"./Work/$filename\" background=\"./Import/Images/$image_name\">\n  <div class=\"text-overlay\">\n    <div class=\"title\">$filename</div>\n    <div class=\"description\">$description</div>\n  </div>\n</div>"

        # Insert the new div into the HTML file within <div class="button-container">
        sed -i "/<div class=\"button-container\">/a \  $new_div" "$HTML_FILE"

        # Check if the year-divider for the current year is present
        if ! grep -q "<div class=\"year-divider\">" "$HTML_FILE"; then
            # If not found, insert a new year-divider for the current year
            echo "Inserting year-divider for $current_year"
            year_divider="<div class=\"year-divider\">\n  <span>$current_year</span>\n</div>"
            sed -i "/<div class=\"button-container\">/a \  $year_divider" "$HTML_FILE"
        fi
    fi
done