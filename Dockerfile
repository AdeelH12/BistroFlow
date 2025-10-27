# FRONTEND BUILD STAGE
FROM node:18 AS build
WORKDIR /frontend
COPY package*.json ./
COPY public ./public
COPY src ./src
RUN npm ci
RUN npm run build

# BACKEND STAGE
FROM node:18
WORKDIR /app
COPY backend ./backend
COPY --from=build /frontend/build ./build
COPY package*.json ./
RUN npm ci --force
EXPOSE 5000
CMD ["node", "backend/server.js"]