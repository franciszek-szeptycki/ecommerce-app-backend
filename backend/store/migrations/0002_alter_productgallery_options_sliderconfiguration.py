# Generated by Django 5.0.3 on 2024-03-31 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='productgallery',
            options={'verbose_name_plural': 'Product Galleries'},
        ),
        migrations.CreateModel(
            name='SliderConfiguration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('subtitle', models.CharField(max_length=255)),
                ('images', models.ManyToManyField(related_name='slider_images', to='store.product')),
            ],
            options={
                'verbose_name_plural': 'Slider configuration',
            },
        ),
    ]