from flask import Flask, render_template, request,redirect,session
from flask import current_app as app
import sys
import os

from connections import api
from model import User,Post
from view import view

template_dir = os.path.abspath('templates')
print(template_dir)

static_dir = os.path.abspath('static')
print(static_dir)


app = Flask(__name__,template_folder=template_dir,static_folder=static_dir)

app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config.update(
    TESTING=True,
    SECRET_KEY= 'DevTest'
)
app.app_context().push()

users = User.users
Last_search = []
Search_Results = [] 
userPublicData = {'username':""}



@app.route('/')
def inicio():
    return view.inicio( userPublicData)

    
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
    return view.try_login(request,users,userPublicData)


@app.route('/logout', methods=['POST',])
def logout():
    return view.logout(userPublicData)
    

@app.route('/register', methods=['POST',])
def register():
    return view.register(User,request)

@app.route('/post')
def newpost():
    return render_template("post/post.html", userPublicData = userPublicData )



def run():  
    app.run(debug=True)