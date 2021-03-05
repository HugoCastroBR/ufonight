from flask import Flask, render_template, request,redirect,session
from flask import current_app as app
import sys
import os
from flask_cors import CORS,cross_origin

from connections import api
from model import User,Post, Search
from view import view

template_dir = os.path.abspath('templates')
print(template_dir)

static_dir = os.path.abspath('static')
print(static_dir)


app = Flask(__name__,template_folder=template_dir,static_folder=static_dir)
cors = CORS(app)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config['CORS_HEADERS'] = 'Content-Type'
app.config.update(
    TESTING=True,
    SECRET_KEY= 'DevTest'
)
app.app_context().push()

users = User.users
Last_search = []
Search_Results = [] 
userPublicData = {'username':""}



Search_word = 'aaaaaaaaa'

@app.route('/')
@cross_origin()
def inicio():
    return view.inicio( userPublicData)

    
@app.route('/resultados')
@cross_origin()
def resultados():
    global Search_word
    #pedir banco de dados pegar posts q tenham a string _search no titulo e nas tags
    return view.resultados(Search_Results = Search_Results,nmr_results = str(len(Search_Results)), userPublicData = userPublicData, Last_search = Last_search,Search_word = Search_word)


@app.route('/procurar', methods=['POST',])
@cross_origin()
def procurar():
    global Search_Results, Search_word
    
    Search_Results = Search.procurar(Last_search,request.form['SearchItem'])

    Search_word = request.form['SearchItem']

    return view.procurar(Search_Results)


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

# @app.route('/filter')
# def filter():
#     print(request.body)

def run():  
    app.run(debug=True,port=5500)