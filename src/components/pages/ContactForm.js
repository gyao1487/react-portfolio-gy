// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mgebydrj");
  if (state.succeeded) {
    //Make a modal pop up for message sent
    return <p>Thanks for your message!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="name">Name: </label>
      <input className ="form-control" id="name" name="name" placeholder="Enter Name" />
      <label htmlFor="email">Email Address</label>
      </div>

      <div className="form-group">
      <input className ="form-control" id="email" type="email" name="email" placeholder= "Enter email"/>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />{" "}
       </div>

       <div className="form-group">
      <label htmlFor="message">Message:</label>
      <textarea className ="form-control" id="message" name="message" placeholder="Type your message here" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button type="submit" className="btn btn-primary" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
