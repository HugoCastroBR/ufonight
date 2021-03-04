from flask import Flask, render_template, request,redirect,session
import sys
import os
from flask import current_app as app

template_dir = os.path.abspath('templates')
print(template_dir)

static_dir = os.path.abspath('static')
print(static_dir)
# sys.path.append('..\model')

from connections import api
from model import User,Post
from view import view


app = Flask(__name__,template_folder=template_dir,static_folder=static_dir)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config.update(
    TESTING=True,
    SECRET_KEY= 'DevTest'
)
app.app_context().push()


users = User.users





Lista_Novidade_Home = []
Lista_Novidade_Home.append(Post.Novidades_Home("Teste","random"))

Last_search = []

# Search_Results = [Result("Teste","random",["a","b","aqua"])] # pegar cada valor do banco de dados e adicionar aqui ao fazer o procurar.
Search_Results = [] 

userPublicData = {'username':"Hugo"}

userPublicData['username']

def RefreshSession():
    print(session['User']) 
    try:
        userPublicData['username'] = session['User']
    except KeyError:
        session['User'] = False
        userPublicData['username'] = session['User']

    if session['User'] == False:
        session['User'] = ''



@app.route('/')
def inicio():
    RefreshSession()
    return view.inicio(Lista_Novidade_Home, userPublicData)

    
@app.route('/resultados')
def resultados():
    #pedir banco de dados pegar posts q tenham a string _search no titulo e nas tags
    return view.resultados(Search_Results = Search_Results,nmr_results = str(len(Search_Results)), userPublicData = userPublicData, Last_search = Last_search)



@app.route('/procurar', methods=['POST',])
def procurar():
    return view.procurar(Last_search,Search_Results)



@app.route('/login')
def login():
    return view.login(userPublicData)

@app.route('/try_login',methods=['POST',])
def try_login():
    return view.try_login(request,users)


@app.route('/logout', methods=['POST',])
def logout():
    print("logout")
    session['User'] = ''
    RefreshSession()
    return redirect("/")
    



@app.route('/register', methods=['POST',])
def register():
    print(request.form) 
    # fazer checkbox de termos de uso funcionar com js e ser clicavel para ler
    # fazer Error funcionar
    User.create_User(request.form['Register_Username'],request.form['Register_Email'],request.form['Register_Password'],request.form['Register_Password 2'])
    print("users: ")
    return redirect('/login')

@app.route('/post')
def newpost():
    return render_template("post/post.html", userPublicData = userPublicData )

def run():  
    app.run(debug=True)