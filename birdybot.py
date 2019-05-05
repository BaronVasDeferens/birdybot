import RPi.GPIO as GPIO
import time
from time import strftime
from picamera import PiCamera

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.IN)
camera = PiCamera()
camera.resolution = (640, 480)

while True:
    inputState = GPIO.input(18)
    if inputState == True:
        fileName = strftime("%Y-%m-%d_%H%M%S", time.localtime()) + ".jpg"
        print("motion detetcted : " + fileName)
        camera.capture(fileName)
        time.sleep(2)