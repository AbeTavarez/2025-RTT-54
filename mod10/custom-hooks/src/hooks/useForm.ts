import { useState, type ChangeEvent } from "react";

function useForm(initialValues, validate, onSubmit) {
  // 1. Create state for form values and errors
  const [values, setValues] =useState(initialValues)

  // 2. Create handleChange - updates the right field as the user types
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;
    setValues(prevValues => ({
        ...prevValues,
        [name]: value
    }))
  }

  // 3. Create handleSubmit - prevents default, runs validation, and calls onSubmit if valid
  function handleSubmit(e) {

    // Run validation (if validate function is provided)
    // Set errors if there are any
    // If there are no errors, call onSubmit(values)
  }

  // 4. Create resetForm - resets form to initial values
  function resetForm() {}

  // 5. Return everything needed by the component
  return {values, handleChange, handleSubmit, resetForm} 
}

export default useForm;

