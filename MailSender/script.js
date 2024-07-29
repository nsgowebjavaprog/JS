const form = document.getElementById('email-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const startTime = document.getElementById('start-time').value;

    fetch('emails.json')
        .then(response => response.json())
        .then(emails => {
            emails.forEach(email => {
                sendEmail(name, phone, startTime, email);
            });
        })
        .catch(error => console.error('Error:', error));
});

function sendEmail(name, phone, startTime, email) {
    const subject = `Message from ${name}`;
    const body = `Hello,\n\nMy name is ${name} and my phone number is ${phone}. I would like to start at ${startTime}.\n\nBest regards,\n${name}`;

    // Replace with your email service or SMTP details
    const emailService = 'https://smtpjs.com/v2/smtpjs.aspx';
    const emailUser = 'naga111@gmail.com';
    const emailPassword = '22121112111';

    Email.send({
        SecureToken: emailPassword,
        To: email,
        From: emailUser,
        Subject: subject,
        Body: body
    }).then(
        message => console.log(`Email sent to ${email}: ${message}`)
    );
}