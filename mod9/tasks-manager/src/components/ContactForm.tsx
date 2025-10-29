import React, { useState } from "react";

// Define an interface for your form data if using a single state object
interface ContactFormData {
name: string;
email: string;
message: string;
}

const ContactForm: React.FC = () => {
  // --- STATE ---
  // TODO: Initialize state for name, email, and message
  // Choose either individual useState or a single state object
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })

  // --- HANDLERS ---
  // TODO: Implement handleChange function(s) for inputs/textarea
  // Remember to handle event types correctly (e.g., React.ChangeEvent<HTMLInputElement>)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;

    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value         
    }))
  }

  // TODO: Implement handleSubmit function
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO: Prevent default form submission
    // TODO: Log the form data (name, email, message) to the console
    event.preventDefault();
    console.log(formData);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name" // Important if using single state object with computed property names
          // TODO: Add value and onChange props
          value={formData.name}
          onChange={handleChange}
        />
      </div>


      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          // TODO: Add value and onChange props
          value={formData.email}
          onChange={handleChange}
        />
      </div>


      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          // TODO: Add value and onChange props (remember textarea uses value prop)
          value={formData.message}
          onChange={handleChange}
        />
      </div>


      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
