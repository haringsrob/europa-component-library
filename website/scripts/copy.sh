#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Copy builds
rm -rf ./public/_imports
mkdir -p ./public/_imports
cp -r ../dist/styleguide/ec ./public/_imports