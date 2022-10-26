from django.db import models
from django.contrib.auth.models import User

class Blog(models.Model):
  title = models.CharField(max_length=100)
  description = models.TextField()
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  topic = models.CharField(max_length=100)
  date_creation = models.DateTimeField()

  def __str__(self) -> str:
    return self.title + self.description
