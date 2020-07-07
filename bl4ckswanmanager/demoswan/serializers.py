from rest_framework import serializers
from demoswan.models import Swan 

# Swan Serializer
class SwanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Swan
        fields = '__all__'


