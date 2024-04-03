FROM python:3.10

RUN useradd -m django-user
USER django-user

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .

HEALTHCHECK CMD curl --fail http://localhost:8000/admin/ || exit 1",

CMD ["./entrypoint.sh", "python", "-m", "gunicorn", "backend.wsgi:application", "-b", "0.0.0.0:8000"]