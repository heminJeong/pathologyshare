# Dockerfile

# React build and copy to Django static
FROM node:21-slim as nodejs

COPY ./frontend /app/frontend

WORKDIR /app/frontend

RUN npm install

RUN npm run build

# Using let's encrypt
FROM certbot/certbot:latest as certbot


# Django Server
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./backend /app/backend

COPY --from=nodejs /app/frontend/build /app/backend/pathshare/build


# RUN pip install --no-cache-dir -r /app/backend/requirements.txt
RUN pip install -r /app/backend/requirements.txt

# RUN SERVER
WORKDIR /app/backend/pathshare
RUN sed -i 's/\r$//g' ./start.sh
RUN chmod +x ./start.sh
CMD ["./start.sh"]