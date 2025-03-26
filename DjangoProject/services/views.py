from django.shortcuts import render

def home(request):
    return render(request, "services/Home.html")

def beauty_services(request):
    return render(request, "services/Beauty.html")

def household_services(request):
    return render(request, "services/Household.html")
