#! /bin/sh

echo start server


python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput

daphne -b 0.0.0.0 -p 8000 pathshare.asgi:application