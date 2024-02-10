import path from 'path'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT || 5555

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/email", (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_ACC,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: {
      name: name,
      address: email,
    },
    to: process.env.GMAIL_ACC,
    subject: "Message From Your Portfolio Site!",
    text: `${email} ${message}`,
  }

  const sendMail = async (transporter, mailOptions) => {
    try {
      await transporter.sendMail(mailOptions)
      console.log('Email Sent')
    } catch (error) {
      console.error(error)
    }
  }

  sendMail(transporter, mailOptions)

  res.status(200).json({"Message": "Email Sent"})
})

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static(path.join(__dirname, '../dist')))

  // any route that is not api will be redirected to index.html
  app.get('*', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running')
  })
}

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})