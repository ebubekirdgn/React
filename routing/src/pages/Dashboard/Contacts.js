import React from 'react'
import {useFormik } from 'formik';

function Contacts() {
  const {handleSubmit,handleChange} = useFormik({
    initialValues:{ firstname: "", lastName: "", email: "",message:"" },
    onSubmit:(values) => {
      console.log(values);
    }
  });

  return (
    <div>
      <h2>Contacts</h2>
          <form onSubmit={handleSubmit} className='form'>
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                id="firstname"
                name="firstname"
                placeholder="firstname"
                onChange={handleChange("firstname")}
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                placeholder="lastName"
                onChange={handleChange("lastName")}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="jane@acme.com"
                onChange={handleChange("email")}
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                onChange={handleChange("message")}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
    </div>
  );
}

export default Contacts