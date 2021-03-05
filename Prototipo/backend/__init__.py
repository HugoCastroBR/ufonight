from flask import Flask, render_template, request,redirect,session
import sys
from flask import current_app as app

sys.path.append('/connections')
sys.path.append('/controller')
sys.path.append('/model')
sys.path.append('/view')



from connections import api
from model import Post, User
from controller import routes
from view import view


routes.run()