from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='/profile_pictures', blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.username


