from django.urls import path

from . import views

urlpatterns = [
  path('', views.index, name="index"),
  path('<int:blog_id>/', views.detail),
  path('list/', views.list),  
  path('react/', views.react)
]
