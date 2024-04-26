from .base import *

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'pathshare',
        'HOST': 'db_dev',
        'USER': 'jhemin0415',
        'PORT': 5432,
        'PASSWORD': 'djdkdl159'
    }
}