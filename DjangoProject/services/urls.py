from django.urls import path
from . import views  # ✅ Import views module
from .views import beauty_services, household_services, cart, account, contact

urlpatterns = [
    path('', views.home, name="home"),  # ✅ Reference views.home
    path("beauty/", beauty_services, name="beauty_services"),
    path("household/", household_services, name="household_services"),
    path("cart/", cart, name="cart"),
    path("accounts/", account, name="accounts"),
    path("contact/", contact, name="contact"),
]
