from django.urls import path
from . import views

urlpatterns = [
    path('config/', views.WebsiteConfigDetailAPIView.as_view(), name='website-configuration'),

    path('products/', views.ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:pk>/', views.ProductDetailAPIView.as_view(), name='product-detail'),
]
