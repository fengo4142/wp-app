from django.db import models

# Create your models here.


class Customer(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=128)

    def __str__(self):
        return self.first_name + ' ' + self.last_name

    def __unicode__(self):
        return self.email
