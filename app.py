from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/page1")
def page1():
    return render_template("page1.html")


@app.route("/secret")
def secret():
    return render_template("page2.html")


@app.route("/birthday")
def birthday():
    return render_template("page3.html")


@app.route("/special")
def special():
    return render_template("page5.html")


@app.route("/message")
def message():
    return render_template("page6.html")


@app.route("/wish")
def wish():
    return render_template("page7.html")


if __name__ == "__main__":
    app.run(debug=True)