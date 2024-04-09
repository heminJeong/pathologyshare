
FROM node:21-slim AS nodejs

COPY . /app

WORKDIR /app

RUN npm install

RUN npm run build


FROM nginx:alpine AS nginx_certbot

RUN apk add --no-cache certbot certbot-nginx

COPY --from=nodejs /app/build /app/build
COPY nginx.conf /etc/nginx/nginx.conf


EXPOSE 443
EXPOSE 80

CMD [ "nginx"]
# RUN certbot --nginx -d example.com