from flask import Flask, render_template, request,redirect,session
import sys
sys.path.append('/connections')
sys.path.append('/controller')
sys.path.append('/model')
sys.path.append('/view')



from connections import api
from model import Post, User
from controller import routes



# Fazer favoritar funcionar

routes.run()