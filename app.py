from flask import Flask, render_template, request, session, url_for, redirect

app = Flask(__name__) #create Flask object

@app.route("/") #assign following fxn to run in response to root route request
def index():
    return render_template("index2.html")

@app.route("/ethnicity") #assign following fxn to run in response to root route request
def ethnicity():
    return render_template("ethnicity.html")

@app.route("/age") #assign following fxn to run in response to root route request
def age():
    return render_template("age2.html")

@app.route("/gender") #assign following fxn to run in response to root route request
def gender():
    return render_template("gender.html")

@app.route("/populationdensity") #assign following fxn to run in response to root route request
def populationdensity():
    return render_template("population_density.html")

@app.route("/analysis") 
def analysis():
    return render_template("analysis.html")

if __name__ == "__main__": #do not run if this file is imported as module
    app.debug = True
    app.run()
