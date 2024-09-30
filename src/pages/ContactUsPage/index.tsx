import React, { FormEvent, useState } from 'react';
import Button from 'components/Common/Button';
import './index.css';
import { EMAIL_API_KEY } from 'configs/env.config';

const ContactUsPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Handle form submission
    const formData = new FormData(event.currentTarget);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      // TODO: Handle the error
    }
  };

  return (
    <div className="contactUsPage">
      <h1>Contact Us</h1>
      <p>Any questions? Drop us a message!</p>
      <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST" className="contactForm">
      <input type="hidden" name="access_key" value={EMAIL_API_KEY} />
      <div className="formRow">
        <input type="text" name="name" placeholder="Name" required autoComplete="off" />
      </div>
      <div className="formRow">
        <input type="tel" name="number" placeholder="Phone Number" autoComplete="off" />
      </div>
      <div className="formRow">
        <input type="email" name="email" placeholder="Email" required autoComplete="off" />
      </div>
      <textarea name="message" placeholder="Write your inquiry..." required autoComplete="off" />
        <Button type="submit">Send Message</Button>
        {submitted && <p>Thank you! Your message has been sent.</p>}
      </form>
    </div>
  );
};

export default ContactUsPage;
