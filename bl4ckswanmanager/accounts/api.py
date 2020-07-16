from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer , LoginSerializer
import os,json
from .action import waf,exportwaf
from django.http import HttpResponse


# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })
# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1],
            
        })
# Get User API
class UserAPI(generics.RetrieveUpdateAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

class CmdAPI(generics.GenericAPIView):
    serializer_classes=[]
    def get(self, request,*args,**kwargs):
        if (request.query_params['ip'] == None):
            newdata = []
        else:
            newdata = waf(request.query_params['ip'])
        
        return Response(newdata)

class ExportAPI(generics.RetrieveAPIView):
    serializer_classes=[]
    def get(self, request,*args,**kwargs):
        with open('./accounts/resultwaf.json', 'r') as file:
            response = HttpResponse(file, content_type='application/json')
            response['Content-Disposition'] = 'attachment; filename=resultwaf.json'
            return response


