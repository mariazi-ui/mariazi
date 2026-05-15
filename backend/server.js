require('dotenv').config();

const express = require('express');

const Mailjet = require('node-mailjet');

const app = express();

app.use(cors({
    origin: 'https://mariazi-ui.github.io/mairazi'
}));
app.use(express.json());

const mailjet = Mailjet.connect(
    process.env.API_KEY,
    process.env.SECRET_KEY
);

app.post('/contact', async (req, res) => {
    const {name, email, subject, message} = req.body;

    try {
        const result = await mailjet
        .post("send", {'version': 'v3.1'})
        .request({
            "Message":[
                {
                    "From": {
                        "Email": email,
                        "Name": name
                    },
                    "To": [
                        {
                            "Email": process.env.EMAIL,
                            "Name": "Marita Aziga"
                        }
                    ],
                    "Subject": subject,
                    "TextPart": `
                        Name: ${name}
                        Email: ${email}
                        Message: ${message}
                    `,
                    "HTMLPart": `
                        <h2>A message from ${name}</h2>
                        <br>
                        <p>${message}</p>
                        <br><br>
                        <p>Regards</p>
                        <p>${name}</p>
                        <p>${email}</p>
                    `
                }
            ]
        });
        res.json({
            success: true,
            result:result.body,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 300");
});