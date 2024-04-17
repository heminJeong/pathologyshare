import jwt
from django.conf import settings
from django.contrib.auth import authenticate
from django.http import JsonResponse

from rest_framework import generics, status
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
    
class MainView(TemplateView):
    template_name = "index.html"

class SignInView(APIView):
    def post(self, request):
        username = request.get.data('username')
        pw = request.get.data('password')

        user = authenticate(request, username=username, password=password)
        if user:
            payload = {
                'username' : username,
            }
            token = jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm='HS256')
            return Response({'token':token}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)
        
class SignUpView(APIView):
    def post(self, request):
        username = request.get.data('username')
        pw = request.get.data('password')

        
class ImageUploadView(APIView):
    def post(self, request):
        pass

class AnnotationView(APIView):
    def get(self, request):
        pass

    def post(self, request):
        pass

    def 
    