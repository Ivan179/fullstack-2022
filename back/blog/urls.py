from django.urls import path

from . import views

urlpatterns = [
  path('', views.index, name="index"),
  path('<int:pk>/update/', views.BlogUpdate.as_view(), name="blogsupdate"),
  path('<int:blog_id>/', views.detail, name="details"),
  path('list/', views.list, name="blogslist"),  
  path('react/', views.react),
  path('create/', views.BlogCreate.as_view(), name="blogscreate"),
]
