from api.serializers import CustomerSerializer
from main.models import Customer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView


class CustomerView(APIView):
    def get(self, request, version='v1', format='json'):
        data = CustomerSerializer(
            Customer.objects.all().order_by('-id'), many=True).data
        return Response(data, status=status.HTTP_200_OK)

    def post(self, request, version='v1', format='json'):
        serialized = CustomerSerializer(data=request.data)
        errors = None
        if serialized.is_valid():
            serialized.save()
            return self.get(request)
        else:
            errors = serialized.errors
        return Response(errors, status=status.HTTP_400_BAD_REQUEST)
