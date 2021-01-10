from flask import Flask, render_template, request,redirect
import ast

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

class Post:
    def __init__(self,url = None,Post_id = None):
        self._favorite = False  # altere
        self._url = url
        self._url = Post_id

    def Toggle_favorite(self):
        if self._favorite == False:
            self._favorite = True
        else:
            self._favorite = False

    def get_info(self, info):
        return eval("self._" + info)
    

class Novidades_Home(Post):
    def __init__(self,titulo,categoria):
        self._titulo = titulo
        self._categoria = categoria

class Result(Post):
    def __init__(self,titulo,desc,tags):
        self._titulo = titulo
        self._desc = desc
        self._tags = tags


Lista_Novidade_Home = []
Lista_Novidade_Home.append(Novidades_Home("Teste","random"))

Last_search = []

Search_Results = [Result("Teste","random",["a","b","aqua"])] # pegar cada valor do banco de dados e adicionar aqui ao fazer o procurar.

@app.route('/')
def inicio():
    return render_template("home/index.html",Lista_Novidade_Home = Lista_Novidade_Home)
    
@app.route('/resultados')
def resultados():
    
    if len(Last_search) > 0:
        _Search = Last_search[-1]

    return render_template("search/search.html",Search_Results = Search_Results )

@app.route('/procurar', methods=['POST',])
def procurar():
    Last_search.append(request.form['SearchItem'])
    return redirect("/resultados")

# Fazer favoritar funcionar

app.run(debug=True)