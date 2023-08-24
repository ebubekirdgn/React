import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

function Contacts() {
  const { handleSubmit, handleChange,handleBlur,values ,isSubmitting,errors,touched} = useFormik({
    initialValues: { firstname: "", lastname: "", email: "", message: "" },
    onSubmit: async (values,bag) => {
      // await new Promise((r) =>    setTimeout(r,1000))
      //console.log(bag);   Formla alakalı yapabileceğimiz  cogu sey gelir burada
      console.log(values);
      bag.resetForm();
    },

    validationSchema,
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
            onBlur={handleBlur("firstname")}
          />
        </div>
        {
          errors.firstname && touched.firstname && <div className="error">{errors.firstname}</div>
        }

        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            name="lastname"
            placeholder="lastname"
            value={values.lastname}
            onChange={handleChange("lastname")}
            onBlur={handleBlur("lastname")}

          />
        </div>
        {
          errors.lastname && touched.lastname &&  <div className="error">{errors.lastname}</div>
        }

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            value={values.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}

          />
        </div>
        {
          errors.email && touched.email &&   <div className="error">{errors.email}</div>
        }
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={values.message}
            disabled={isSubmitting}
            onChange={handleChange("message")}
            onBlur={handleBlur("message")}

          />
        </div>
        {
          errors.message && touched.message &&  <div className="error">{errors.message}</div>
        }
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
    </div>
  );
}

export default Contacts;
