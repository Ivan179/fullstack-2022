import datetime
from django.shortcuts import render, HttpResponseRedirect, get_object_or_404
from django.http.response import HttpResponseNotFound
from django.urls import reverse
from django.http import Http404
from django.utils import timezone
from django.views.generic import CreateView, UpdateView
from rest_framework import viewsets, mixins, permissions, response, permissions
from back.urls import router
from .models import Blog
from .forms import BlogForm
from .serializers import BlogSerializer, BlogsSerializer

class IsOwnerPermission(permissions.BasePermission):
    message = 'Only owner can edit blog'

    def has_object_permission(self, request, view, obj): 
      if request.user.id == obj.user.id:
        return True
      else:
        return False
          

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

def create(request):
  if request.method == 'POST':
    form = BlogForm(request.POST)

    if form.is_valid():
      title = form.cleaned_data.get('title')
      description = form.cleaned_data.get('description')
      topic = form.cleaned_data.get('topic')
      post = Blog.objects.create(title=title, description=description, topic=topic, user=request.user, date_creation=timezone.now())
      post.save()

      return HttpResponseRedirect('/blog/list')
  else: 
    form = BlogForm()
  return render(request, 'create.html', { 'form': form })

class BlogCreate(CreateView):
  template_name = 'create.html'
  model = Blog
  context_object_name = 'form'
  fields = ['title', 'description', 'topic', 'date_creation']

  def form_valid(self, form):
    form.instance.user = self.request.user
    return super(BlogCreate, self).form_valid(form)

  def get_success_url(self):
    return reverse('details', args=(self.object.id,))

class BlogUpdate(UpdateView):
  template_name = 'update.html'
  model = Blog
  context_object_name = 'form'
  fields = ['title', 'description', 'topic', 'date_creation']
  
  def dispatch(self, request, pk) :
    blog = Blog.objects.get(pk=pk)
    if blog.user == request.user:
        return super().dispatch(request)
    return HttpResponseNotFound()

  def get_success_url(self):
    return reverse('details', args=(self.object.id,))

class BlogViewSet(viewsets.ModelViewSet):
  queryset = Blog.objects.all()
  serializer_class = BlogSerializer
  permission_classes = []

  def get_serializer_class(self):
    if 'pk' in self.kwargs:
      return BlogSerializer
    return BlogsSerializer

  def perform_create(self, serializer):
    serializer.validated_data['user'] = self.request.user
    serializer.validated_data['date_creation'] = datetime.datetime.today()
    return super().perform_create(serializer)

  def perform_update(self, serializer):
    return super().perform_update(serializer)

class MyBlogsViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
  queryset = Blog.objects.all()
  serializer_class = BlogsSerializer
  permission_classes = [permissions.IsAuthenticated]

  def get_queryset(self):
    return Blog.objects.filter(user=self.request.user)
      

router.register(r'blogs', BlogViewSet)
router.register(r'myblogs', MyBlogsViewSet)