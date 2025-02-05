# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:20-alpine3.21 AS build

ARG APP_NAME
ARG APP_BACKEND_URL
ARG APP_LOGOUT_URL
ARG APP_LOGIN_URL
ENV CI=true

# Set the working directory
WORKDIR /usr/local/app

# Copy only package for cache usage
COPY package.json /usr/local/app

# Install all the dependencies
#RUN npm install
RUN npm install -g pnpm
RUN pnpm install

# Add the source code to app
COPY . /usr/local/app/

#ENV NG_APP_NAME="Docker User"
#ENV NG_APP_BACKEND_URL="http://localhost:6002/api/v1"

RUN echo "Oh dang look at that ${APP_NAME} AND ${APP_BACKEND_URL}"

ENV VITE_APP_NAME="${APP_NAME}"
ENV VITE_APP_BACKEND_URL="${APP_BACKEND_URL}"
ENV VITE_APP_LOGOUT_URL="${APP_LOGOUT_URL}"
ENV VITE_APP_LOGIN_URL="${APP_LOGIN_URL}"


# Generate the build of the application
RUN npm run build
# RUN ng build --configuration production --output-path=/dist

# Stage 2: Serve app with nginx server
# ENV NGINX_PORT=8080

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/build/client/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080


# https://medium.com/@sebastyijan_why_hello_there/mastering-remix-run-v2-routing-a-simple-and-complete-guide-daeda48bd658
