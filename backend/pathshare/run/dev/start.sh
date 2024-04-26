#!/bin/sh

echo start server for dev

pip install -r ./requirements.txt
cd pathshare
python manage.py makemigrations
python manage.py migrate

export DJANGO_SETTINGS_MODULE=pathshare.settings.dev
python manage.py runserver

# python manage.py collectstatic --noinput
