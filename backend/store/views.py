from rest_framework import generics
from .models import Product
from .serializers import *
from rest_framework.decorators import api_view
from .email import send_email
from rest_framework.response import Response


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


@api_view(['POST'])
def contact_view(request):
    recipient = request.data.get('recipient')
    subject = request.data.get('subject')
    body = request.data.get('body')
    
    if not recipient:
        return Response({'error': 'Recipient is required'}, status=400)
    if not subject:
        return Response({'error': 'Subject is required'}, status=400)
    if not body:
        return Response({'error': 'Body is required'}, status=400)
    
    try:
        send_email(recipient, subject, body)
        return Response({'message': 'Email sent successfully'}, status=200)
    except Exception as e:
        print(e)
        return Response({'error': str(e)}, status=500)

    