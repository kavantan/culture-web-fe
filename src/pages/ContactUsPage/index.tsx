import React, { FormEvent } from 'react';
import Button from 'components/Common/Button';
import './index.css';

const ContactUsPage: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <div className="contactUsPage">
      <h1>Contact Us</h1>
      <p>Any questions? Drop us a message!</p>
      <form onSubmit={handleSubmit} className="contactForm">
        <div className="formRow">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="formRow">
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" />
        </div>
        <textarea placeholder="Write your inquiry..." required />
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactUsPage;
