import stripe
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response

stripe.api_key = settings.STRIPE_SECRET_KEY

stripe.PaymentIntent.create(
    amount=1099,
    currency="pln",
    automatic_payment_methods={"enabled": True},
)


def calculate_order_amount(items=None):
    return 1400


@api_view(['POST'])
def create_payment(request):
    try:
        data = request.data
        # data = json.loads(request.data)
        intent = stripe.PaymentIntent.create(
            amount=calculate_order_amount(data['items']),
            currency='cad',
            automatic_payment_methods={
                'enabled': True,
            },
        )
        return Response({
            'clientSecret': intent['client_secret'],
            'intent': intent
        })
    except Exception as e:
        return Response({'error': str(e)})


@api_view(['POST'])
def save_stripe_info(request):
    data = request.data
    email = data['email']
    payment_method_id = data['payment_method_id']
    extra_msg = ''
    customer_data = stripe.Customer.list(email=email).data

    if len(customer_data) == 0:
        customer = stripe.Customer.create(
            email=email, payment_method=payment_method_id)
    else:
        customer = customer_data[0]
        extra_msg = "Customer already existed."
    return Response({'message': 'Success', 'data': {
        'customer_id': customer.id, 'extra_msg': extra_msg}
    })
