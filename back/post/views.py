from django.shortcuts import render
from rest_framework import viewsets
from .models import Post
from blog.models import Blog
from .serializers import PostSerializer
from django.contrib.auth.models import User

class PostViewSet(viewsets.ModelViewSet):
  queryset = Post.objects.all()
  serializer_class = PostSerializer

  def perform_create(self, serializer):
    serializer.validated_data['user'] = self.request.user
    serializer.validated_data['blog'] = Blog.objects.get(id=self.request.query_params['blog'])
    return super().perform_create(serializer)

  def get_queryset(self):
    if 'blog' in self.request.query_params:
      return Post.objects.filter(blog_id=self.request.query_params['blog'])
    return super().get_queryset()
