import "./contact.scss";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    validationMesage: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, such as sending data to a server
    console.log("Form submitted with data:", formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
      validationMessage: "Form submitted! "
    });
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
