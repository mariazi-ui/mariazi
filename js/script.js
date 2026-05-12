const submit = document.getElementById('sendEmail');

/**
 * A function that sends a email so new visitors can get in touch. 
 * This is done using axios to get a response.
 */
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
