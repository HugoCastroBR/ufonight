users = []


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

def create_User(name,email,password,password_confirm = None,comment_permission = True ,report_permission = True, _post_permission = False):
    users.append(User(len(users),name,email,password,password_confirm))