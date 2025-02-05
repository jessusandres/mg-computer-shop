#!/bin/bash

docker build -t mg-computer-shop:latest \
  --build-arg APP_NAME="Docker with remix" \
  --build-arg APP_BACKEND_URL="http://localhost:6002/api/v1" \
  --build-arg APP_LOGOUT_URL="http://localhost:6002/api/v1/auth/auth0/logout" \
  --build-arg APP_LOGIN_URL="http://localhost:6002/api/v1/auth/auth0/login" \
  .

docker run --name mg-computer-shop -d -p 8080:8080 mg-computer-shop:latest
