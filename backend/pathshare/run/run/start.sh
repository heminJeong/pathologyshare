#! /bin/sh

echo start server

pip install -r ./requirements.txt
python manage.py makemigrations
python manage.py migrate
# python manage.py collectstatic --noinput

daphne -b 0.0.0.0 -p 8000 pathshare.asgi:application