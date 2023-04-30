#!/usr/bin/python3
from flask import Flask, render_template
from gpiozero import LED
from halo import Halo
import time
timeleft=125
app = Flask(__name__)
spinner = Halo(text='\nHot drink ready in: ' + str(timeleft) + ' seconds', spinner='dots')

power = LED(17)
lid = LED(2)
start = LED(3)

@app.route('/')
def webroot():
    return render_template('main.html')

@app.route('/start')
def startup():
    timeleft = 125
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
    return("Start")

@app.route('/time')
def timeset():
    return("Time")

if __name__ == "__main__":
   app.run(host='0.0.0.0', port=80, debug=True)








