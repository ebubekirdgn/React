import React from "react";
import { useFormik } from "formik";

function Contacts() {
  const { handleSubmit, handleChange,values ,isSubmitting} = useFormik({
    initialValues: { firstname: "", lastName: "", email: "", message: "" },
    onSubmit: async (values,bag) => {
      await new Promise((r) => {
        setTimeout(r,1000)
        
      })
      console.log(bag); // Formla alakalı yapabileceğimiz  cogu sey gelir burada
      console.log(values);
      bag.resetForm();
    },
  });

  return (
    <div>
      <h2>Contacts</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            name="firstname"
            placeholder="firstname"
            value={values.firstname}
            onChange={handleChange("firstname")}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="lastName"
            value={values.lastName}
            onChange={handleChange("lastName")}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            value={values.email}
            onChange={handleChange("email")}
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={values.message}
            disabled={isSubmitting}
            onChange={handleChange("message")}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
    </div>
  );
}

export default Contacts;
