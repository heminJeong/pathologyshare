from .base import *

DEBUG = False

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'pathshare',
        'HOST': 'db',
        'USER': 'jhemin0415',
        'PORT': 5432,
        'PASSWORD': 'djdkdl159'
    }
}