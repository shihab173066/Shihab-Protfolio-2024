import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Replace with your real receiving email address
receiving_email_address = "mdshihabhedu@gmail.com"

# Replace with your SMTP server details
smtp_host = "smtp.gmail.com"  # For Gmail
smtp_port = 587  # 587 for TLS, 465 for SSL
smtp_username = "your_email@gmail.com"  # Replace with your SMTP email
smtp_password = "your_app_password"  # Replace with your app-specific password

# Function to send the email
def send_email(name, email, subject, message):
    try:
        # Create the email content
        msg = MIMEMultipart()
        msg['From'] = smtp_username  # Use your SMTP email as the sender
        msg['To'] = receiving_email_address
        msg['Subject'] = subject

        # Add the message body
        body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        msg.attach(MIMEText(body, 'plain'))

        # Connect to the SMTP server and send the email
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls()  # Upgrade the connection to secure
        server.login(smtp_username, smtp_password)
        server.sendmail(smtp_username, receiving_email_address, msg.as_string())
        server.quit()

        return "Email sent successfully!"
    except smtplib.SMTPAuthenticationError:
        return "Failed to authenticate. Check your SMTP username and password."
    except smtplib.SMTPConnectError:
        return "Failed to connect to the SMTP server. Check your host and port."
    except Exception as e:
        return f"Failed to send email: {str(e)}"

# Example usage (Replace these with real input values in production)
name = "John Doe"
email = "john.doe@example.com"
subject = "Hello from Python"
message = "This is a test email sent from Python."

# Call the function
response = send_email(name, email, subject, message)
print(response)
