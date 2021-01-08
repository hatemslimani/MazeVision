from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('solve', views.index, name='index'),
    path('generate/', views.getGeneratePage, name='getGeneratePage'),
    path('generateMaze/', views.generateMaze, name='generateMaze'),
    path('upload/', views.upload, name='upload'),
]