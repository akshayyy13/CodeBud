import React from 'react'
import ContactUsForm from '../ContactPage/ContactUsForm';
const ContactForm = () => {
  return (
    <div className="mx-auto md:w-[700px] sm:w-[600px]">
      <h1 className="text-center text-4xl font-semibold">Get in Touch</h1>
      <p className="text-center text-richblack-300 mt-3">
        We&apos;d love to here for you, Please fill out this form.
      </p>
      <div className="mt-12 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
}

export default ContactForm
