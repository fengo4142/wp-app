from django.conf.urls import url, include
from .views import blog


urlpatterns = [
    url(r'^blog/$', blog.BlogView.as_view()),
]
