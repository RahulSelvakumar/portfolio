import React, { useState } from 'react';
import "../styles/Contact.css"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: [],
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'enquiryType') {
      const options = Array.from(e.target.options);
      const selectedOptions = options.filter((option) => option.selected);
      const selectedValues = selectedOptions.map((option) => option.value);
      setFormData({ ...formData, [name]: selectedValues });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.enquiryType.length > 0 && formData.message) {
      setIsSubmitted(true);
      setIsError(false);
      setFormData({
        name: '',
        email: '',
        enquiryType: [],
        message: ''
      });
    } else {
      setIsError(true);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
        >
          <option value="General">General</option>
          <option value="Support">Support</option>
          <option value="Collaboration">Collaboration</option>
        </select>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <div className="success-popup">Form submitted successfully!</div>
      )}
      {isError && (
        <div className="error-popup">Please fill all required fields.</div>
      )}
    </section>
  );
};

export default Contact;
