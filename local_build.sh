#!/bin/bash

docker build -t mg-computer-shop:latest \
  --build-arg NG_APP_NAME="Docker" \
  --build-arg NG_APP_BACKEND_URL="http://localhost:6002/api/v1" \
  .

docker run --name mg-computer-shop -d -p 8080:8080 mg-computer-shop:latest
