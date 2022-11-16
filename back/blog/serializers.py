from rest_framework import serializers
from .models import Blog
from user.serializers import UserSerializer
from post.serializers import PostSerializer

class BlogSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)
  post_set = PostSerializer(read_only=True, many=True)

  class Meta:
    model = Blog
    fields = ['id', 'title', 'description', 'user', 'post_set', 'date_creation', 'topic']


class BlogsSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)

  class Meta:
    model = Blog
    fields = ['id', 'title', 'description', 'user', 'date_creation', 'topic']
    read_only_fields = ['date_creation']