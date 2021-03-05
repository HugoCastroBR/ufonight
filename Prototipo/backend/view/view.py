from flask import session
import flask
from model import Post
from connections import api
from flask import has_request_context
from flask import Flask, render_template, request,redirect,session
from flask import current_app as app



def RefreshSession(userPublicData):
    print(session['User']) 
    try:
        userPublicData['username'] = session['User']
    except KeyError:
        session['User'] = ''
        userPublicData['username'] = session['User']
    print('aa: ',userPublicData['username'])

def inicio( userPublicData):
    RefreshSession(userPublicData)
    print('aa: ',userPublicData['username'])
    return render_template("/home/index.html", userPublicData = userPublicData)

def resultados(Search_Results, nmr_results, userPublicData,Last_search):
    if len(Last_search) > 0:
        _Search = Last_search[-1]
    return render_template("search/search.html",Search_Results = Search_Results,nmr_results = str(len(Search_Results)), userPublicData = userPublicData )


def procurar(Last_search,Search_Results):
    Last_search.append(request.form['SearchItem'])
    Search = request.form['SearchItem']
    Search_Results.clear()
    if Search != "":
        results = api.search(Search)
    else:
        results = api.search()
    # {'id': 3, 'Titulo': 'Teste 04', 'Verificado': 0, 'Pais': 'chile', 'Estado': '', 'Cidade': '', 'Tipo_nave': 'aredodna', 'especie': '', 'descricao': 'bb', 'nome_contatado_testemunhas': '', 'verificado_por': '', 'observacoes': 'b'}
    for result in results:
        Search_Results.append(Post.Result(result['Titulo'],result['descricao']))
    return redirect("/resultados")

def login(userPublicData):
    return render_template("login/login.html", userPublicData = userPublicData)

def try_login(request,Users,userPublicData):
    for user in Users:
        if request.form['Login_Username'] == user.name  and request.form['Login_Password'] == user._password:
            print("logado")
            session['User'] = request.form['Login_Username'] 
            RefreshSession(userPublicData)
            return redirect('/')
    print(request.form['Login_Username'])
    print(request.form['Login_Password'])
    return redirect('/login')

def register(User,request):
    # fazer checkbox de termos de uso funcionar com js e ser clicavel para ler
    # fazer Error funcionar
    User.create_User(request.form['Register_Username'],request.form['Register_Email'],request.form['Register_Password'],request.form['Register_Password 2'])
    return redirect('/login')

def logout(userPublicData):
    session['User'] = ''
    print(session['username'])
    RefreshSession(userPublicData)
    return redirect("/")