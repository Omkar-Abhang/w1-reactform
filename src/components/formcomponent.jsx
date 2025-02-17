import React, { useState } from 'react';


import '../styles/form.css'



const Formcomponent = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone No. is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'Pan No. is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar No. is required';

    setErrors(newErrors);
    setIsFormValid(true);


  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (isFormValid) {
      console.log(formData.firstName);
     
      // print(formData);

    }
  };









  return (
    <>
      <center><h1>Registration Form</h1></center>
      <div className="regform">

        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
            {errors.username && <span>{errors.username}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label>Password:</label>
            <input type={formData.showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} />
            <button type="button" onClick={() => setFormData({ ...formData, showPassword: !formData.showPassword })}>
              {formData.showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div>
            <label>Phone No.:</label>
            <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
            {errors.phoneNo && <span>{errors.phoneNo}</span>}
          </div>
          <div>
            <label>Country:</label>
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            {errors.country && <span>{errors.country}</span>}
          </div>
          <div>
            <label>City:</label>
            <select name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>
            {errors.city && <span>{errors.city}</span>}
          </div>
          <div>
            <label>Pan No.:</label>
            <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
            {errors.panNo && <span>{errors.panNo}</span>}
          </div>
          <div>
            <label>Aadhar No.:</label>
            <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
            {errors.aadharNo && <span>{errors.aadharNo}</span>}
          </div>
          <button type="submit" disabled={!isFormValid}>Submit</button>
        




        </form>
      </div>
      <div>
      <h1>Form Submitted Successfully</h1>
      <h2>Details:</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <p>Phone No.: {formData.phoneNo}</p>
      <p>Country: {formData.country}</p>
      <p>City: {formData.city}</p>
      <p>Pan No.: {formData.panNo}</p>
      <p>Aadhar No.: {formData.aadharNo}</p>
    </div>
   
    </>
  );

};

export default Formcomponent;
