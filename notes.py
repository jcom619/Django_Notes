
####################################################


#                            views.py file


# HOW TO SAY HI TO THE WORLD

from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

# basic hello world
def index (request):
    return HttpResponse("Hola Mundo!")

# to actually connect an html page...
def index (request):
    my_dict = {'use_Django_to_insert_into_html': "Django adds python to html files"}
    return render(request, 'first_app/index.html',context=my_dict)


####################################################


####################################################

#                       project_folder / urls.py file


from django.conf.urls import url
from django.contrib import admin
from django.conf.urls import include # alloes to include "first_app" path to url
from first_app import views # this imports from views.py

urlpatterns = [
    # this is the url to the index function in the views.py file
    url(r'^$',views.index, name='index'),

    # this adds the "first_app" path to the url ...
    # http://127.0.0.1:8000/first_app/
    url(r'^first_app/',include('first_app.urls')),
    url(r'^admin/', admin.site.urls),
]


#                       app_folder / urls.py


from django.conf.urls import url
from appTwo import views # allows access to views.py file in appTwo folder

urlpatterns = [
    url(r'^$',views.index,name='index'),
]


####################################################


####################################################


#                           settings.py file


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'first_app', # this is the app you create, you must add it to INSTALLED_APPS
    # manually
]

####################################################


# import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
print(__file__) # prints a special key to indicate settings.py file

# if you want to seen the entire file path...
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
print(os.path.abspath(__file__))

# to show the path up to the base directory...
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
print(BASE_DIR)

# join templates folder to base directory...
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
print(os.path.join(BASE_DIR,"templates"))

# give it a variable to assign it...
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEMPLATES_DIR = os.path.join(BASE_DIR,"templates")

# once the variable name is given, add it to the TEMPLATES folder
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATE_DIR], # here you can see the variable added to directories
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'first_app' # this is where the "first_app" must be added
            ],
        },
    },
]

####################################################


####################################################


#                           the "templates directory"

# within templates, create an html file...

# call this one, index.html

# next create a new folder in templates called first_app
# then move the html file to it




























#
