import React from "react";
import { Formik, Field, Form } from "formik";
import validationSchema from "./validations";
import { useTodo } from "../../context/ToDoContext";
import {v4 as uuidv4} from 'uuid'

function NewToDoForm() {
  const  {addTodo} = useTodo();
  return (
    <div>
      <Formik
        initialValues={{
          text: "",
        }}
        onSubmit={ (values,bag) => {
          console.log(values);
          addTodo(values.text)
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
