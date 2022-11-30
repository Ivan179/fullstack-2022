from rest_framework import serializers
from .models import Blog
from user.serializers import UserSerializer
from post.serializers import PostSerializer

class BlogSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)
  post_set = PostSerializer(read_only=True, many=True)
  timestamp = serializers.SerializerMethodField()
  post_count = serializers.SerializerMethodField()

  def get_timestamp(self, obj):
    return obj.get_timestamp()

  def get_post_count(self, obj):
    return obj.post_set.count()

  class Meta:
    model = Blog
    fields = ['id', 'title', 'description', 'user', 'post_set', 'date_creation', 'topic', 'timestamp', 'post_count']


class BlogsSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)
  timestamp = serializers.SerializerMethodField()

  def get_timestamp(self, obj):
    return obj.get_timestamp()

  class Meta:
    model = Blog
    fields = ['id', 'title', 'description', 'user', 'date_creation', 'topic', 'timestamp']
    read_only_fields = ['date_creation']