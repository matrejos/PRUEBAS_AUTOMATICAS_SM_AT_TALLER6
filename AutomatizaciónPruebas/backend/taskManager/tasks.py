# Create your tasks here

from celery import shared_task
import apps.runnerScritps.runResembleJS

@shared_task
def runResembleTest(testID):
   print("Ejecutando test de resembleJS para el TestID: " + testID)
   apps.runnerScritps.runResembleJS.runResembleTest(testID)
