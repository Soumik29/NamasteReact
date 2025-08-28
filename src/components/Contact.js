const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <h2>Get in touch</h2>
      <div className="contact-modal">
        <div className="contact-form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="contact-form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>
        <div className="contact-form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
