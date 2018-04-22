import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.IN)

while True:
    inputState = GPIO.input(18)
    if inputState == True:
        print("motion detetcted")
        time.sleep(1)

