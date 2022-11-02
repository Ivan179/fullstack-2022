from django.shortcuts import render
from django.contrib.auth.views import LoginView, LogoutView

class Login(LoginView):
  template_name = 'registration/login.html'
  
  def get_redirect_url(self):
    return '../../blog/list'

class Logout(LogoutView):
  next_page = '../../blog/list'