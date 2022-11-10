FROM node:16.17 AS builder
WORKDIR /app
COPY package.json /app/package.json
#RUN npm install --only=prod
RUN npm install
COPY . /app
RUN npm run build
