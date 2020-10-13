from django.db import models
import uuid

# Create your models here.
class ResembleTest(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    fecha_ejecucion = models.DateTimeField(auto_now=True)
    estado = models.BooleanField(null=False, default=False)
    imagen1 = models.ImageField(null=False)
    observacionesImagen1 = models.CharField(max_length=256)
    imagen2 = models.ImageField(null=False)
    observacionesImagen2 = models.CharField(max_length=256)
    imagen3 = models.ImageField(null=False)
    observacionesImagen3 = models.CharField(max_length=256)
