#!/bin/bash
echo "Starting Bedrock Server..."
wget https://minecraft.azureedge.net/bin-linux/bedrock-server-1.21.51.zip
unzip bedrock-server-1.21.51.zip
chmod +x bedrock_server
echo "eula=true" > eula.txt
./bedrock_server
