from django.db import models
from django.contrib.auth.models import User
from blog.models import Blog

class Post(models.Model):
  title = models.CharField(max_length=100)
  description = models.TextField(null=True, default="")
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
  image = models.ImageField(upload_to="posts", null=True)

  def __str__(self) -> str:
    return self.title + self.description
