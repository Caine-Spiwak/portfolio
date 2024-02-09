import style from './Contact.module.css'

const Contact = () => {

  return (
    <div className={style.container}>
      <div id='contact' className={style.contactSection}>
        <div className={style.contactHeader}>
          <p className={style.formTitle}>CONTACT ME</p>
          <p className={style.subtitle}>I&apos;d love to hear from you...</p>
        </div>
        <div className={style.formContainer}>
          <form>

            <div className={style.formColumn}>
              <div className={style.formRow}>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter Name..."
                ></input>
              </div>
              <div className={style.formRow}>
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Enter Email..."
                ></input>
              </div>
            </div>

            <div className={style.formRow}>
              <label>Message:</label>
              <textarea
                type='text'
                placeholder="Type your message here..."
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