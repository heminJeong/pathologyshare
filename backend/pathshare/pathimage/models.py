from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Pathfile(models.Model):
    owner = models.ForeignKey("User", related_name="user")
    create_time = models.DateTimeField(auto_now_add=True)


class Annotations(models.Model):
    pathfile = models.ForeignKey()
    owner = models.OneToOneField("User", verbose_name="owner", on_delete=models.CASCADE)
    data = models.JSONField(verbose_name='json')
    update_time = models.DateTimeField(auto_now=True)
    create_time = models.DateTimeField(auto_now_add=True)