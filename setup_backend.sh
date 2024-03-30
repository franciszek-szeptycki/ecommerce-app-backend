#!/bin/bash

cd backend

if [ ! -d "./venv" ]; then
    python3 -m venv venv
fi

source venv/bin/activate

pip install -r requirements.txt

rm db.sqlite3
python manage.py migrate

python manage.py loaddata **/fixtures/*

python manage.py createsuperuser

python manage.py runserver