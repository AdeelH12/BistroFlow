# FRONTEND BUILD STAGE
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
COPY public ./public
COPY src ./src
RUN npm install
RUN npm run build


# BACKEND STAGE
FROM node:18
WORKDIR /app
COPY . .
COPY --from=build /app/build ./build
RUN npm install --force
EXPOSE 5000
CMD ["node", "backend/server.js"]