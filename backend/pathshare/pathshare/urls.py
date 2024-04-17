"""
URL configuration for pathshare project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from account.views import UserCreateAPIView, TestAPIView, MainView, SignInView, SignUpView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('rest_framework.urls')),
    path('api/register/', UserCreateAPIView.as_view(), name='user-create'),
    path('api/signin/', SignInView.as_view(), name='sign-in'),
    path('api/signup/', SignUpView.as_view(), name='sign-up'),
    path('test/', TestAPIView.as_view(), name='test_api'),
    path('', MainView.as_view(), name="main")

]
