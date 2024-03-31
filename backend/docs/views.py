from rest_framework.views import APIView
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


class MyView(APIView):
    @swagger_auto_schema(
        operation_description="Custom operation description",
        responses={200: openapi.Response('Response Description')},
        manual_parameters=[
            openapi.Parameter('parameter_name', openapi.IN_QUERY, description="Parameter Description",
                              type=openapi.TYPE_STRING)
        ]
    )
    def get(self, request):
        return Response("Hello World")
