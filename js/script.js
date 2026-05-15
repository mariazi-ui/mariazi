/**const submitBtn = document.getElementById('sendEmail');

submitBtn.addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            subject,
            message,
        }),
    });

    const data = await response.json();

    console.log(data);
    alert('Email sent!');
}); */



const submit = document.getElementById('sendEmail');


const sendEmail = (name, email, subject, message) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.set('Authorization', 'Basic' + btoa(process.env.API_KEY+":"+process.env.SECRET_KEY));

    const data = JSON.stringify({
            "Messages": [{
                "From": [{"Email": email, "Name": name}],
                "To": {"Email": process.env.EMAIL, "Name": "Marita Aziga"},
                "Subject": subject,
                "TextPart": message
            }]
        });
        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: data,
        }

        fetch('https://api.mailjet.com/v3.1/send', requestOptions)
        .then(response => response.text()).then(result => alert(result))
        .catch(error => alert(error));
    }

sendEmail.addEventListener('click', () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    sendEmail(name.innerText, email.innerText, subject.innerText, message.innerText);
});
