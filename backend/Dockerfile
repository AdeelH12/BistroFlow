# Front End
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
COPY src ./src
COPY public ./public
RUN npm install
RUN npm run build

# Backend 
FROM node:18
WORKDIR /app
COPY ./backend ./backend
COPY --from=build /app/build ./build
WORKDIR /app/backend
RUN npm install
#backend port 5000
EXPOSE 5000
CMD [ "node" , "server.js" ]
