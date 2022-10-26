from django.shortcuts import render, HttpResponse, get_object_or_404
from django.http import Http404
from .models import Blog

def index(request):
  return render(request, 'index.html')

def react(request):
  return render(request, 'react.html')

def detail(request, blog_id):
  blog = get_object_or_404(Blog, pk=blog_id)

  return render(request, 'index.html', { 'blog': blog })

def list(request):
  blogs = Blog.objects.all()

  return render(request, 'list.html', { 'blogs': blogs })
