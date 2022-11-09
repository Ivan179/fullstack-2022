from django.shortcuts import render
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
  queryset = Post.objects.all()
  serializer_class = PostSerializer

  def get_queryset(self):
    if 'blog' in self.request.query_params:
      return Post.objects.filter(blog_id=self.request.query_params['blog'])
    return super().get_queryset()
