from rest_framework import serializers
from apps.resemble.models import ResembleTest

class ResembleTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResembleTest
        fields = ['id', 'fecha_ejecucion', 'estado', 'imagen1', 'observacionesImagen1', 'imagen2', 'observacionesImagen2', 'imagen3', 'observacionesImagen3']



        