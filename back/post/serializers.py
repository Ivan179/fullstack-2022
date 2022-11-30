from rest_framework import serializers
from .models import Post
from user.serializers import UserSerializer

class PostSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)

  class Meta:
    model = Post
    fields = ['id', 'title', 'description', 'user', 'image', 'blog']
    read_only_fields = ['blog']