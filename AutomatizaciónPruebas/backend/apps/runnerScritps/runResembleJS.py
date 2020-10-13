import os
from io import BytesIO
from django.db import models
from apps.resemble.models import ResembleTest
from django.core.files.storage import FileSystemStorage
import shutil

def runResembleTest(testID):
    path_images_origen = 'C:/Users/ASUS/Documents/MAESTRIA/AUTOMATIZACION PRUEBAS/TALLER 6/PRUEBAS_AUTOMATICAS_SM_AT_TALLER6/AutomatizaciónPruebas/backend/cypress/screenshots/VRT_colorPallete-master.spec.js/'
    path_images_destino = 'C:/Users/ASUS/Documents/MAESTRIA/AUTOMATIZACION PRUEBAS/TALLER 6/PRUEBAS_AUTOMATICAS_SM_AT_TALLER6/AutomatizaciónPruebas/front/VRTColorPalleteTester/src/assets/'
    comando_cypress = "cypress run --env id=" + testID + " --spec cypress/integration/VRT_colorPallete-master.spec.js --headless --browser chrome -c trashAssetsBeforeRuns=false"
    comando_resemble = "node nodejs/compareColorPallete.js " + testID + ' "' + path_images_origen + '"'

    print(comando_cypress)
    os.system(comando_cypress)

    print(comando_resemble)
    os.system(comando_resemble)

    shutil.move(path_images_origen + testID + "_VRT_colorPallete-master_1.png" , path_images_destino + testID + "_VRT_colorPallete-master_1.png")
    shutil.move(path_images_origen + testID + "_VRT_colorPallete-master_2.png" , path_images_destino + testID + "_VRT_colorPallete-master_2.png")
    shutil.move(path_images_origen + testID + "_VRT_colorPallete-master_3.png" , path_images_destino + testID + "_VRT_colorPallete-master_3.png")

    test = ResembleTest.objects.get(pk=testID)
    test.imagen1 = testID + "_VRT_colorPallete-master_1.png"
    test.imagen2 = testID + "_VRT_colorPallete-master_2.png"
    test.imagen3 = testID + "_VRT_colorPallete-master_3.png"
    test.estado = True
    test.save()

