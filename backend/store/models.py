from django.db import models
from .utils import DEFAULT_IMG_PATH


class ProductGallery(models.Model):
    image = models.ImageField(upload_to='products/', default=DEFAULT_IMG_PATH)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.image.url

    class Meta:
        verbose_name_plural = 'Product gallery'


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()

    image = models.ImageField(upload_to='products/', default=DEFAULT_IMG_PATH)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    gallery = models.ManyToManyField('ProductGallery', related_name='products')

    def __str__(self):
        return self.name


class WebsiteConfig(models.Model):
    hero_title = models.CharField(max_length=255)
    hero_subtitle = models.CharField(max_length=255)
    hero_image = models.ImageField(upload_to='hero/', default=DEFAULT_IMG_PATH)

    slider_images = models.ManyToManyField('ProductGallery', related_name='sliders')

    def __str__(self):
        return "Website configuration"

    class Meta:
        verbose_name_plural = 'Website configuration'
