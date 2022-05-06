import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_cm2flbt', 'template_dpgdt2i', form.current, 'uRuVfHW30wMmroqjL').then(res=>{
      console.log(res)
    }).catch(err=> console.log(err));
    e.target.reset();
  }

  return (
    <div className='container border' style={{marginTop: "50px", width: "50%", background: "#75ABBC"}}>
      <h1 style={{marginTop: "25px", justifyContent: "center"}}>Contact Me</h1>
      <form ref={form} className='row' style={{margin: "25px 85px 75px 100px"}}
      onSubmit= {sendEmail}>
        <label>Name</label>
        <input type='text' name='name'/>

        <label>Email</label>
        <input type='email' name='user_email' className='form-control' />

        <label>Message</label>
        <textarea name='message' rows='4' className='form-control'/>
        <input type = 'submit' value='Send' className='form-control btn btn-primary' style={{marginTop: "30px"}}/>

      </form>
    </div>
  );
}
