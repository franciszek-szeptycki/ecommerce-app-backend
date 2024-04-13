import json

import stripe
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response as jsonify

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
        return jsonify({
            'clientSecret': intent['client_secret'],
            'intent': intent
        })
    except Exception as e:
        return jsonify({'error': str(e)})
