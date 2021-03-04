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
    def __init__(self,titulo,desc):
        self._titulo = titulo
        self._desc = desc
    