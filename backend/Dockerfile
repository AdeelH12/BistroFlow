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
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend ./
COPY --from=build /app/build ../build
RUN npm install
EXPOSE 5000
CMD [ "node" , "server.js" ]
