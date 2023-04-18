from flask import Flask, url_for, render_template

app= Flask("__name__")

@app.route("/")
def home():
    return render_template("introducao.html")

@app.route("/product")
def product():
    return render_template("product.html")

@app.route("/master")
def master():
    return render_template("master.html")

@app.route("/equipe")
def equipe():
    return render_template("equipe.html")

@app.route("/avaliacoes")
def avaliacoes():
    return render_template("avaliacoes.html")

@app.route("/ferramentas")
def ferramentas():
    return render_template("ferramentas.html")

@app.route("/scrum")
def scrum():
    return render_template("scrum.html")

""" @app.route("/scrum")
def scrum():
    return render_template("scrum.html") """