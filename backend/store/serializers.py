from rest_framework import serializers
from .models import *


class ProductGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductGallery
        fields = ['img']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description', 'img', 'created_at', 'updated_at']


class ProductDetailSerializer(serializers.ModelSerializer):
    gallery = ProductGallerySerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description', 'img', 'created_at', 'updated_at', 'gallery']


class WebsiteConfigSerializer(serializers.ModelSerializer):
    slider_imgs = ProductGallerySerializer(many=True, read_only=True)

    class Meta:
        model = WebsiteConfig
        fields = '__all__'
