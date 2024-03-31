from rest_framework import serializers
from .models import Product, ProductGallery


class ProductGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductGallery
        fields = ['image', 'created_at', 'updated_at']


class ProductSerializer(serializers.ModelSerializer):
    galery = ProductGallerySerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description', 'image', 'created_at', 'updated_at', 'galery']
