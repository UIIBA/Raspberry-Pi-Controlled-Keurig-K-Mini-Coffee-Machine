#!/usr/bin/python3
from gpiozero import LED
from halo import Halo
import time
timeleft = 125
spinner = Halo(text='\nHot drink ready in: ' + str(timeleft) + ' seconds', spinner='dots')


power = LED(17)
lid = LED(2)
start = LED(3)

lid.on()
time.sleep(0.1)
lid.off()
time.sleep(0.1)
lid.on()
time.sleep(0.1)
lid.off()

time.sleep(1)

start.on()
time.sleep(0.1)
start.off()
time.sleep(0.1)
start.on()
time.sleep(0.1)
start.off()
time.sleep(0.1)

spinner.start()

while timeleft > 0:
  timeleft -= 1
  time.sleep(1)
  spinner.start('\nHot drink ready in: ' + str(timeleft) + ' seconds')
