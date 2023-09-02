import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Zoom} from "react-awesome-reveal";

export default function ContactForm(props) {
  const [state, handleSubmit] = useForm("maygqewd");
  if (state.succeeded) {
      return (
        <>
          <h3 className='subheading'>{props.formSuccessHeading}</h3>
          <p>{props.formSuccessParagraph}</p>
          <div className='contact-success'></div>
        </>
      )
  }
  return (
    <Zoom triggerOnce delay={1000}>
      <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className="col-12">
          <h3 className='subheading position-relative mb-4'>{props.formSubheading}</h3>
        </div>     
        <div className="col-sm-6 col-12">     
          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder='Ime i prezime'
            className='form-input'
          />
          <ValidationError
            prefix="Full Name"
            field="fullName"
            errors={state.errors}
          />
        </div>
        <div className="col-sm-6 col-12">        
          <input
            id="email"
            type="email" 
            name="email"
            placeholder='E-mail'
            className='form-input'
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />   
      </div>
      <div className="col-12">   
        <textarea
          id="message"
          name="message"
          placeholder='Poruka'
          className='form-input  h-300'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="col-12 text-end">
        <button type="submit" className="btn-green" disabled={state.submitting}>
          {props.formButton}
        </button>
      </div>
    </div>
    </form>
    </Zoom>
  );
}