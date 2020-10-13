from django.urls import path
from django.conf.urls import include, url
from apps.resemble.views import resembleTest_list, resembleTest_run

urlpatterns = [    
    url('^$', resembleTest_list),
    path('resemble-run/', resembleTest_run),
]