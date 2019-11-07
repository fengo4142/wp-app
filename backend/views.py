from django.shortcuts import render

# Create your views here.

# show index.html


def index(request):
    return render(request, 'index.html')
