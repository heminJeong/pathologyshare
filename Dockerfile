
FROM node:21-slim AS nodejs

COPY ./frontend /app/frontend

WORKDIR /app/frontend

RUN npm install

RUN npm run build

FROM python:3.12-slim AS base

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./backend /app/backend

# RUN pip install --no-cache-dir -r /app/backend/requirements.txt
RUN pip install --upgrade pip
RUN apt-get update && apt-get upgrade -y && apt-get install -y build-essential
RUN pip install -r /app/backend/requirements.txt

COPY --from=nodejs /app/frontend/build /app/backend/pathshare/build

# RUN SERVER
WORKDIR /app/backend/pathshare
RUN sed -i 's/\r$//g' ./start.sh
RUN chmod +x ./start.sh

VOLUME ./backend/pathshare/staticfiles/

CMD [ "./start.sh" ]
# RUN "python3 manage.py makemigrations"
# RUN "python3 manage.py migrate"

# RUN "python3 manage.py collectstatic --noinput"
# CMD "daphne -b 0.0.0.0 -p 8000 pathshare.asgi:application"