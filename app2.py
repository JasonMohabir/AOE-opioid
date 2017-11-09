from flask import Flask, render_template, request, session, url_for, redirect

app = Flask(__name__) #create Flask object

@app.route("/") #assign following fxn to run in response to root route request
def index():
    return render_template("bootstrapMap.html",title="Map")

@app.route("/ethnicity")
def ethnicity():
    return render_template("bootstrapEthnicity.html",title="Ethnicity")

@app.route("/age") 
def age():
    return render_template("bootstrapAge.html",title="Age")

@app.route("/gender")
def gender():
    return render_template("bootstrapGender.html",title="Gender")

@app.route("/populationdensity")
def populationdensity():
    return render_template("bootstrapPopulationDensity.html",title="Population Density")

@app.route("/analysis") 
def analysis():
    return render_template("bootstrapAnalysis.html",title="Analysis")

if __name__ == "__main__": #do not run if this file is imported as module
    app.run(debug = True)
