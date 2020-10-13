from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('resemble/', include('apps.resemble.urls')),
]
