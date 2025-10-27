# Front End
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
COPY public ./public
COPY src ./src
RUN npm install
RUN npm run build

# Backend 
FROM node:18
WORKDIR /app
COPY . . 
RUN npm install
EXPOSE 5000
CMD [ "node" , "backend/server.js" ]
