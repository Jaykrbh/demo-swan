from demoswan.models import Swan
from rest_framework import viewsets, permissions
from .serializers import SwanSerializer

# Swan ViewSet
class SwanViewSet(viewsets.ModelViewSet):
    permission_classes= [
        permissions.IsAuthenticated
    ]

    serializer_class = SwanSerializer
    

    def get_queryset(self):
        return self.request.user.leads.all()


    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)



