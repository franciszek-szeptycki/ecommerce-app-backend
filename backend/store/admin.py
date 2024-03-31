from django.contrib import admin
from django.utils.html import format_html
from django.contrib.auth.models import User, Group
from .models import *

admin.site.unregister(User)
admin.site.unregister(Group)

admin.site.register([Product, ProductGallery])