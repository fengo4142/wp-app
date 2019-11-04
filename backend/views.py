from django.shortcuts import render

# Create your views here.

# show home.html
def home(request):
    return render(request, 'home.html')
