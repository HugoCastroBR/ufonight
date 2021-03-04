from flask import Flask, render_template, request,redirect,session
import sys
import os

template_dir = os.path.abspath('templates')
print(template_dir)

static_dir = os.path.abspath('static')
print(static_dir)
# sys.path.append('..\model')

from connections import api
from model import User,Post


app = Flask(__name__,template_folder=template_dir,static_folder=static_dir)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config.update(
    TESTING=True,
    SECRET_KEY= 'DevTest'
)



Users = []



    

def create_User(name,email,password,password_confirm = None,
    comment_permission = True ,report_permission = True, _post_permission = False):

        Users.append(User(len(Users),name,email,password,password_confirm))



Lista_Novidade_Home = []
Lista_Novidade_Home.append(Post.Novidades_Home("Teste","random"))

Last_search = []

# Search_Results = [Result("Teste","random",["a","b","aqua"])] # pegar cada valor do banco de dados e adicionar aqui ao fazer o procurar.
Search_Results = [] 

userPublicData = {'username':"Hugo"}



def RefreshSession():
    try:
        print(session['User']) 
    except KeyError:
        session['User'] = False

    if session['User'] == False:
        session['User'] = ''
    userPublicData['username'] = session['User']





@app.route('/')
def inicio():
    RefreshSession()
    return render_template("/home/index.html",Lista_Novidade_Home = Lista_Novidade_Home, userPublicData = userPublicData)

    
@app.route('/resultados')
def resultados():
    #pedir banco de dados pegar posts q tenham a string _search no titulo e nas tags
    if len(Last_search) > 0:
        _Search = Last_search[-1]
    return render_template("search/search.html",Search_Results = Search_Results,nmr_results = str(len(Search_Results)), userPublicData = userPublicData )



@app.route('/procurar', methods=['POST',])
def procurar():
    Last_search.append(request.form['SearchItem'])
    Search = request.form['SearchItem']
    Search_Results.clear()
    if Search != "":
        results = api.search(Search)
    else:
        results = api.search()
    # {'id': 3, 'Titulo': 'Teste 04', 'Verificado': 0, 'Pais': 'chile', 'Estado': '', 'Cidade': '', 'Tipo_nave': 'aredodna', 'especie': '', 'descricao': 'bb', 'nome_contatado_testemunhas': '', 'verificado_por': '', 'observacoes': 'b'}
    for result in results:
        Search_Results.append(Result(result['Titulo'],result['descricao']))
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
    for user in Users:
        if request.form['Login_Username'] == user.name  and request.form['Login_Password'] == user._password:
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
    session['User'] = ''
    RefreshSession()
    return redirect("/")
    
@app.route('/register', methods=['POST',])
def register():
    print(request.form) 
    # fazer checkbox de termos de uso funcionar com js e ser clicavel para ler
    # fazer Error funcionar
    create_User(request.form['Register_Username'],request.form['Register_Email'],request.form['Register_Password'],request.form['Register_Password 2'])
    print("users: ")
    return redirect('/login')

@app.route('/post')
def newpost():
    return render_template("post/post.html", userPublicData = userPublicData )

def run():  
    app.run(debug=True)