import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os

load_dotenv()

def send_email(recipient, subject, body):
    smtp_server = os.getenv('EMAIL_HOST') 
    port = os.getenv('EMAIL_PORT')
    email = os.getenv('EMAIL_HOST_USER')
    password = os.getenv('EMAIL_HOST_PASSWORD')

    message = MIMEMultipart()
    message['From'] = email
    message['To'] = recipient
    message['Subject'] = subject

    message.attach(MIMEText(body, 'plain'))

    server = smtplib.SMTP(smtp_server, port)
    server.starttls()

    server.login(email, password)

    server.sendmail(email, recipient, message.as_string())

    server.quit()
