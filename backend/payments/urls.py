from django.urls import path
from . import views

urlpatterns = [
    path('create-payment-intent/', views.create_payment, name='make_payment'),
    path('save-stripe-info/', views.save_stripe_info, name='save_stripe_info'),
]
