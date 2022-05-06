import React from 'react';
import emailjs from 'emailjs-com'


export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_cm2flbt', template_dpgdt2i, e.target, 'uRuVfHW30wMmroqjL').then(res=>{
      console.log(res)
    }).catch(err=> console.log(err));
  }

  return (
    <div className='container border' style={{marginTop: "50px", width: "50%", background: "#75ABBC"}}>
      <h1 style={{marginTop: "25px", justifyContent: "center"}}>Contact Me</h1>
      <form className='row' style={{margin: "25px 85px 75px 100px"}}
      onSubmit= {sendEmail}>
        <label>Name</label>
        <input type='text' name='name'/>

        <label>Email</label>
        <input type='email' name='user_email' className='form-control' />

        <label>Message</label>
        <textarea name='message' rows='4' className='form-control'/>
        <input type = 'submit' value='send' className='form-control btn btn-primary' style={{marginTop: "30px"}}/>

      </form>
    </div>
  );
}
