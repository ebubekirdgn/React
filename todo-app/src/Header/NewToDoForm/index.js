import React from "react";
import { Formik, Field, Form } from "formik";
import validationSchema from "./validations";

function NewToDoForm() {
  return (
    <div>
      <Formik
        initialValues={{
          text: "",
        }}
        onSubmit={ (values,bag) => {
          console.log(values);
          bag.resetForm();
        }}
        validationSchema= {validationSchema}
      >
        <Form>
          <Field
            className="new-todo"
            placeholder="what needs to be done?"
            autoFocus
            id="text"
            name="text"
          ></Field>
        </Form>
      </Formik>
    </div>
  );
}

export default NewToDoForm;
