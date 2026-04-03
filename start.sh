#!/bin/bash

# Download PocketBase
curl -L https://github.com/pocketbase/pocketbase/releases/latest/download/pocketbase_0.22.0_linux_amd64.zip -o pb.zip

# Unzip it
unzip pb.zip

# Run PocketBase
./pocketbase serve --http=0.0.0.0:$PORT
