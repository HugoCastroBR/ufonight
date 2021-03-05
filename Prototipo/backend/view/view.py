from flask import session
import flask
from flask import Flask, render_template, request,redirect,session




def RefreshSession(userPublicData): 
    try:
        userPublicData['username'] = session['User']
    except KeyError:
        session['User'] = ''
        userPublicData['username'] = session['User']

def inicio( userPublicData):
    RefreshSession(userPublicData)
    return render_template("/home/index.html", userPublicData = userPublicData)

def resultados(Search_Results, nmr_results, userPublicData,Last_search,Search_word):
    if len(Last_search) > 0:
        _Search = Last_search[-1]
    return render_template("search/search.html",Search_Results = Search_Results,nmr_results = str(len(Search_Results)), userPublicData = userPublicData,Search_word = Search_word)


def procurar(Results):
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
    return redirect('/login')

def register(User,request):
    # fazer checkbox de termos de uso funcionar com js e ser clicavel para ler
    # fazer Error funcionar
    User.create_User(request.form['Register_Username'],request.form['Register_Email'],request.form['Register_Password'],request.form['Register_Password 2'])
    return redirect('/login')

def logout(userPublicData):
    session['User'] = ''
    RefreshSession(userPublicData)
    return redirect("/")