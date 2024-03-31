from rest_framework import serializers
from .models import *


class ProductGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductGallery
        fields = ['image', 'created_at', 'updated_at']


class ProductSerializer(serializers.ModelSerializer):
    gallery = ProductGallerySerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description', 'image', 'created_at', 'updated_at', 'gallery']


class WebsiteConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebsiteConfig
        fields = '__all__'
