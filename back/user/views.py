from rest_framework import viewsets, mixins
from django.contrib.auth.models import User
from django.contrib.auth.views import LoginView, LogoutView
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer

class Login(LoginView):
  template_name = 'registration/login.html'
  
  def get_redirect_url(self):
    return '../../blog/list'

class Logout(LogoutView):
  next_page = '../../blog/list'

class UserViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
  serializer_class = UserSerializer
  queryset = User.objects.all()

  def perform_create(self, serializer):
    user = User.objects.create_user(**serializer.validated_data)
    user.set_password(serializer.validated_data['password'])
    return user

class CurrentUser(APIView):
    def get(self, request):
      serializer = UserSerializer(request.user)
      return Response(serializer.data)

