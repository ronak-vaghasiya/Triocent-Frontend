import { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (touched) {
      // Validate as user types if already submitted once
      validateForm();
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true); // Mark the form as touched when submitting

    if (!validateForm()) return; // Prevent form submission if validation fails

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setErrors({});
        setTouched(false);
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div>
        <Heading
          name={"contact us"}
          title={"Schedule a Meeting"}
          align={"start"}
          BG={"blue"}
        />
      </div>

      <div className="mt-14 max-w-[800px] mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-[25px] gap-y-[35px]">
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              placeholder="Your Name *"
              className="text-[14px] font-semibold border-b border-li-gray placeholder-li-gray outline-none focus:placeholder-dark-blue focus:border-dark-blue py-2"
              value={formData.name}
              onChange={handleChange}
            />
            {touched && errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              placeholder="Your Email *"
              className="text-[14px] border-b font-semibold border-li-gray placeholder-li-gray outline-none focus:placeholder-dark-blue focus:border-dark-blue py-2"
              value={formData.email}
              onChange={handleChange}
            />
            {touched && errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
          </div>
          <div className="flex flex-col">
            <input
              type="tel"
              id="phone"
              placeholder="Your Phone *"
              className="text-[14px] border-b font-semibold border-li-gray placeholder-li-gray outline-none focus:placeholder-dark-blue focus:border-dark-blue py-2"
              value={formData.phone}
              onChange={handleChange}
            />
            {touched && errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="text-[14px] border-b font-semibold border-li-gray placeholder-li-gray outline-none focus:placeholder-dark-blue focus:border-dark-blue py-2"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <textarea
              id="message"
              rows="3"
              placeholder="Message"
              className="text-[14px] border-b font-semibold border-li-gray placeholder-li-gray outline-none focus:placeholder-dark-blue focus:border-dark-blue py-2 resize-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center mt-4">
            <Button title="submit now" color="blue"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
