import "./contact.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="contact-wrapper">
      <h1 className="contact-headline">Contact Me</h1>
      <h3 className="contact-text">Let's get in touch!</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
