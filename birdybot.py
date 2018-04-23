import RPi.GPIO as GPIO
import time
from picamera import PiCamera

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.IN)
camera = PiCamera()

while True:
    inputState = GPIO.input(18)
    if inputState == True:
        print("motion detetcted")
        time.sleep(1)

