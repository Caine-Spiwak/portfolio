import { useState } from 'react'
import style from './Contact.module.css'
import axios from 'axios'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, message };
    await axios
      .post('http://localhost:5555/email', data)
      .then(() => {
        setName(''); // Clear the state after sending mail
        setEmail('');
        setMessage('');
        alert('Message Sent Successfully.')
      })
      .catch((error) => {
        console.log(error)
      })
  };

  return (
    <div className={style.container}>
      <div id='contact' className={style.contactSection}>
        <div className={style.contactHeader}>
          <p className={style.formTitle}>CONTACT ME</p>
          <p className={style.subtitle}>I&apos;d love to hear from you...</p>
        </div>
        <div className={style.formContainer}>
          <form onSubmit={handleSubmit}>

            <div className={style.formColumn}>
              <div className={style.formRow}>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter Name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className={style.formRow}>
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Enter Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>

            <div className={style.formRow}>
              <label>Message:</label>
              <textarea
                type='text'
                value={message}
                placeholder="Type your message here..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button type='submit'>SEND</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact