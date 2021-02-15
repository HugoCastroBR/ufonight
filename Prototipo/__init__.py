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
    



Users = []



class User():
    def __init__(self,user_id,name,email,_password,_password_confirm = None,
    comment_permission = True ,report_permission = True, _post_permission = False):
        self.id = user_id
        self.name = name
        self.email = email
        self._password = _password
        self.comment_permission = comment_permission
        self.report_permission = report_permission
        self._post_permission = _post_permission

    def set_password(user_name,new_password):
        for User in Users:
            if User.name == user_name:
                User._password = new_password

    def compare_password(user_name):
        pass

    

def create_User(name,email,password,password_confirm = None,
    comment_permission = True ,report_permission = True, _post_permission = False):

        Users.append(User(len(Users),name,email,password,password_confirm))



Lista_Novidade_Home = []
Lista_Novidade_Home.append(Novidades_Home("Teste","random"))

Last_search = []

Search_Results = [Result("Teste","random",["a","b","aqua"])] # pegar cada valor do banco de dados e adicionar aqui ao fazer o procurar.


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


# Fazer favoritar funcionar

app.run(debug=True)