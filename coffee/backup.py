
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def webroot():
    return render_template('main.html')

@app.route('/start')
def startup():
    
    return("Start")

@app.route('/time')
def timeset():
    
    return("Time")

if __name__ == "__main__":
   app.run(host='0.0.0.0', port=80, debug=True)





