from django.conf.urls import url, include
from django.urls import path
from django.views import generic
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView)
from .views import customer


urlpatterns = [
    url(r'^customer/$', customer.CustomerView.as_view()),
    url(r'^auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^auth/token/obtain/$', TokenObtainPairView.as_view(),
        name='token_obtain_pair'),
    url(r'^auth/token/refresh/$',
        TokenRefreshView.as_view(), name='token_refresh'),
]
