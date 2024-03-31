from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:pk>/', views.ProductDetailAPIView.as_view(), name='product-detail'),
]
