import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Function to send an email
def send_email(name, email, subject, message):
    receiving_email_address = "shihabhossainauni01@gmail.com"  # Your email
    smtp_host = "smtp.gmail.com"
    smtp_port = 587  # TLS
    smtp_username = "your_email@gmail.com"  # Your email
    smtp_password = "your_app_password"  # Your app-specific password

    try:
        # Create the email content
        msg = MIMEMultipart()
        msg['From'] = smtp_username
        msg['To'] = receiving_email_address
        msg['Subject'] = subject
        body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        msg.attach(MIMEText(body, 'plain'))

        # Connect to the SMTP server and send the email
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls()  # Upgrade the connection to secure
        server.login(smtp_username, smtp_password)
        server.sendmail(smtp_username, receiving_email_address, msg.as_string())
        server.quit()

        print("Email sent successfully!")
    except Exception as e:
        print(f"Failed to send email: {str(e)}")

# Taking user input
print("Please fill out the form below:")

name = input("Your Name: ")
email = input("Your Email: ")
subject = input("Subject: ")
message = input("Message: ")

# Send the email
send_email(name, email, subject, message)
