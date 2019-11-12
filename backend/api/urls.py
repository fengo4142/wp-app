from django.conf.urls import url, include
from .views import customer


urlpatterns = [
    url(r'^customer/$', customer.CustomerView.as_view()),
]
