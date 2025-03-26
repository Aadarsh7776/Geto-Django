from django.urls import path
from . import views
from .views import beauty_services, household_services

urlpatterns = [
    path('', views.home, name="home"),
    path("beauty/", beauty_services, name="beauty_services"),
    path("household/", household_services, name="household_services"),
]
