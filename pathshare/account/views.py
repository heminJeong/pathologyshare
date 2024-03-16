from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
# Create your views here.


class UserCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TestAPIView(APIView):
    def get(self, request):
        data = {'message': 'This is a test API view!'}
        return Response(data)