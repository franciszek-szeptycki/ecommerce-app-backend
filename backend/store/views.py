from rest_framework import generics
from .models import Product
from .serializers import *


class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer


class WebsiteConfigDetailAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = WebsiteConfigSerializer

    def get_queryset(self):
        return WebsiteConfig.objects.all()[:1]
