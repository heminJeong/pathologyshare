# Dockerfile
FROM node:21-slim

COPY . /app

WORKDIR /app

RUN npm install

RUN npm run build

# FROM nginx:alpine

# COPY --from=build-stage ./build /usr/share/nginx/html

# EXPOSE 3000

# CMD ["npm", "start"]