from django.shortcuts import render, redirect

def home(request):
    return render(request, "services/Home.html")

def beauty_services(request):
    return render(request, "services/Beauty.html")

def household_services(request):
    return render(request, "services/Household.html")

def cart(request):
    return render(request, "services/cart.html")

def account(request):
    return render(request, "services/Account.html")

def contact(request):
    return render(request, "services/contact.html")

def login(request):
    return render(request, "services/Login.html")

def register(request):
    return render(request, "services/Register.html")

def index(request):
    return render(request, "services/index.html")
