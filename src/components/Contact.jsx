import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
     <main>
      <h1>Contact Us</h1>

      <form>
        <div>
          <label>Name</label>
          <input type="text" required placeholder='Your Full Name...' />
        </div>

        <div>
          <label>Email</label>
          <input type="email" required placeholder='Enter Your Email' />
        </div>

        <div>
          <label>Message</label>
          <textarea name="message" cols="30" rows="5" required placeholder='Tell us about your query...'></textarea>
          {/* <input type="text" required placeholder='Tell us about your query...' /> */}
        </div>

        <button type='submit'>Send</button>
      </form>
     </main>
    </div>
  )
}

export default Contact