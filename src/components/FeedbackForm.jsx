import { useState, useEffect } from "react";

const FeedbackForm = () => {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    product: "",
    city: "",
    message: "",
    date: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setFormData((prevData) => ({ ...prevData, date: formattedDate }));
  }, []);

  const validate = () => {
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number should be 10 digits";
    }
    if (!formData.product) {
      formErrors.product = "Please select a product";
    }
    if (!formData.city) {
      formErrors.city = "Please select a city";
    }
    return formErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    setTouched({
      name: true,
      email: true,
      phone: true,
      product: true,
      city: true,
    });

    // Prevent submission if there are validation errors
    if (Object.keys(formErrors).length > 0) {
      console.log("Form contains errors, submission aborted");
      return;
    }

    console.log("Form submitted:", formData);

    // Submit the form data to the backend
    try {
      const response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Feedback submitted successfully");
        window.alert("Feedback submitted successfully!"); // Alert for successful submission
        setFormData(initialFormState);
        setTouched({});
        setErrors({});
      } else {
        console.error("Failed to submit feedback");
        window.alert("Failed to submit feedback. Please try again."); // Alert for submission failure
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred. Please try again."); // Alert for any error
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));

    // Mark field as touched and validate its value
    setTouched((prevTouched) => ({ ...prevTouched, [id]: true }));

    // Validate the specific field to remove the error once corrected
    let newErrors = { ...errors };
    switch (id) {
      case "name":
        if (value.trim() === "") newErrors.name = "Name is required";
        else delete newErrors.name;
        break;
      case "email":
        if (value === "") newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value))
          newErrors.email = "Email is invalid";
        else delete newErrors.email;
        break;
      case "phone":
        if (value === "") newErrors.phone = "Phone number is required";
        else if (!/^\d{10}$/.test(value))
          newErrors.phone = "Phone number should be 10 digits";
        else delete newErrors.phone;
        break;
      case "product":
        if (value === "") newErrors.product = "Please select a product";
        else delete newErrors.product;
        break;
      case "city":
        if (value === "") newErrors.city = "Please select a city";
        else delete newErrors.city;
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [id]: true }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-x-6 my-6">
        {/* Name */}
        <div>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Name *"
            className="bg-field w-[488px] h-[55px] outline-none rounded-full px-6 text-sm font-semibold placeholder-li-gray focus:placeholder-dark-blue"
          />
          {touched.name && errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>
        {/* Email */}
        <div>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Email *"
            className="bg-field w-[488px] h-[55px] outline-none rounded-full px-6 text-sm font-semibold placeholder-li-gray focus:placeholder-dark-blue"
          />
          {touched.email && errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="flex gap-x-6 my-6">
        {/* Phone Number */}
        <div>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Phone no. *"
            className="bg-field w-[488px] h-[55px] outline-none rounded-full px-6 text-sm font-semibold placeholder-li-gray focus:placeholder-dark-blue"
          />
          {touched.phone && errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        {/* Date */}
        <div>
          <input
            type="date"
            id="date"
            value={formData.date}
            readOnly
            className="bg-field w-[488px] h-[55px] outline-none rounded-full px-6 text-sm font-semibold text-li-gray"
          />
        </div>
      </div>
      <div className="flex gap-x-6 my-6">
        {/* Choose Product */}
        <div>
          <select
            id="product"
            value={formData.product}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-field w-[488px] h-[55px] outline-none rounded-full px-6 text-sm font-semibold text-li-gray"
          >
            <option value="">Choose Product</option>
            <option value="vaccine">Vaccine Bottle</option>
            <option value="mask">Sanitary Mask</option>
            <option value="stethoscope">Stethoscope</option>
            <option value="pressure">Pressure Bladder</option>
          </select>
          {touched.product && errors.product && (
            <p className="text-red-500 text-sm">{errors.product}</p>
          )}
        </div>
        {/* Choose City */}
        <div>
          <select
            id="city"
            value={formData.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-field w-[488px] h-[55px] outline-none rounded-full px-6 text-sm font-semibold text-li-gray"
          >
            <option value="">Choose City</option>
            <option value="surat">Surat</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="pune">Pune</option>
          </select>
          {touched.city && errors.city && (
            <p className="text-red-500 text-sm">{errors.city}</p>
          )}
        </div>
      </div>
      <div>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Write your thoughts ..."
          className="bg-field w-full h-[150px] outline-none rounded-[30px] p-6 text-sm font-semibold placeholder-li-gray focus:placeholder-dark-blue"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="bg-dark-blue hover:bg-green text-white w-full h-[55px] rounded-full text-sm font-semibold mt-6"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;