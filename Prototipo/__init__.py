from flask import Flask, render_template, request,redirect,session
import ast

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config.update(
    TESTING=True,
    SECRET_KEY= 'DevTest'
)

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
    
class User():
    def __init__(self,nome,email):
        pass



Lista_Novidade_Home = []
Lista_Novidade_Home.append(Novidades_Home("Teste","random"))

Last_search = []

Search_Results = [Result("Teste","random",["a","b","aqua"])] # pegar cada valor do banco de dados e adicionar aqui ao fazer o procurar.


userPublicData = {'username':"Hugo"}

Users = {'Hugo':'teste'}

def RefreshSession():
    try:
        print(session['User']) 
    except KeyError:
        session['User'] = False

    if session['User'] == False:
        session['User'] = 'Login'
    userPublicData['username'] = session['User']

@app.route('/')
def inicio():
    RefreshSession()
    return render_template("home/index.html",Lista_Novidade_Home = Lista_Novidade_Home, userPublicData = userPublicData)

    
@app.route('/resultados')
def resultados():
    #pedir banco de dados pegar posts q tenham a string _search no titulo e nas tags
    if len(Last_search) > 0:
        _Search = Last_search[-1]
    return render_template("search/search.html",Search_Results = Search_Results,nmr_results = str(len(Search_Results)), userPublicData = userPublicData )

@app.route('/procurar', methods=['POST',])
def procurar():
    Last_search.append(request.form['SearchItem'])
    return redirect("/resultados")

@app.route('/procurar_tag', methods=['POST',])
def procurar_tag():
    Last_search.append(request.form['Search_Item_tag'])
    return redirect("/resultados")
    

@app.route('/login')
def login():
    return render_template("login/login.html", userPublicData = userPublicData)

@app.route('/try_login',methods=['POST',])
def try_login():
    if request.form['Login_Username'] in Users and request.form['Login_Password'] == Users[request.form['Login_Username']]:
        print("logado")
        session['User'] = request.form['Login_Username'] 
        RefreshSession()
        return redirect('/')
    print(request.form['Login_Username'])
    print(request.form['Login_Password'])
    return redirect('/login')


@app.route('/logout', methods=['POST',])
def logout():
    print("logout")
    session['User'] = 'Login'
    RefreshSession()
    return redirect("/")

# Fazer favoritar funcionar

app.run(debug=True)