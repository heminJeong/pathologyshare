from django.shortcuts import render
from rest_framework.views import APIView

# Create your views here.


class ImageUploadView(APIView):
    def post(self, request):
        pass

class AnnotationView(APIView):
    def get(self, request):
        pass

    def post(self, request):
        pass

