from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes
from rest_framework.parsers import MultiPartParser
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from automatizador.settings import SECRET_KEY
from apps.resemble.models import ResembleTest as ResembleModel
from apps.resemble.serializers import ResembleTestSerializer
from taskManager.tasks import runResembleTest 
from rest_framework import status
from datetime import datetime

@api_view(['GET'])
@parser_classes([MultiPartParser])
@csrf_exempt
def resembleTest_list(request, *args, **kwargs):
    print("[Resemble] Listado de ejecuciones de pruebas")  
    tests = ResembleModel.objects.all()
    serializer = ResembleTestSerializer(tests, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@parser_classes([MultiPartParser])
@csrf_exempt
def resembleTest_run(request, *args, **kwargs):
    # Buscar el objeto de usuario para anexarle el proyecto
    print("[Resemble] Run test")                           
    newTest = ResembleModel.objects.create(fecha_ejecucion=datetime.now(), estado=False, imagen1='', observacionesImagen1='Screenshot tomado previa la prueba.', imagen2='', observacionesImagen2='Screenshot tomado posterior a la prueba.', imagen3='', observacionesImagen3='Diferencias entre las pruebas después de ejecutar el ResembleJS.')
    runResembleTest.delay(newTest.id)
    return Response(status=status.HTTP_201_CREATED)
