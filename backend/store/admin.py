from django.contrib import admin
from django.contrib.auth.models import User, Group
from .models import *
from django.urls import reverse
from django.http import HttpResponseRedirect

admin.site.unregister(User)
admin.site.unregister(Group)

admin.site.register([Product, ProductGallery])


class WebsiteConfigAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Hero', {
            'fields': ('hero_title', 'hero_subtitle', 'hero_image',),
        }),
        ('Slider', {
            'fields': ('slider_images',),
        }),
    )

    def _remove_actions(self, extra_context):
        extra_context = extra_context or {}
        extra_context['show_save_and_add_another'] = False
        extra_context['show_save_and_continue'] = False
        extra_context['close'] = False
        return extra_context

    def changelist_view(self, request, extra_context=None):
        if not WebsiteConfig.objects.exists():
            add_url = reverse('admin:store_websiteconfig_add')
            return HttpResponseRedirect(add_url)
        edit_url = reverse('admin:store_websiteconfig_change', args=[WebsiteConfig.objects.first().id])
        return HttpResponseRedirect(edit_url)

    def change_view(self, request, object_id, form_url='', extra_context=None):
        return super().change_view(request, object_id, form_url=form_url,
                                   extra_context=self._remove_actions(extra_context))

    def add_view(self, request, form_url='', extra_context=None):
        return super().add_view(request, form_url=form_url, extra_context=self._remove_actions(extra_context))


admin.site.register(WebsiteConfig, WebsiteConfigAdmin)
