import React, { useState } from "react";

const Form = () => {
  const defaultFormValues = {
    firstName: {
      id: "firstName",
      type: "text",
      value: "",
      label: "First Name",
      placeholder: "First Name....",
      isError: false,
      errMessage: "first Name can not empty",
    },

    lastName: {
      id: "lastName",
      type: "text",
      value: "",
      label: "Last Name",
      placeholder: "Last Name....",
      isError: false,
      errMessage: "last Name can not empty",
    },

    email: {
      id: "email",
      type: "email",
      value: "",
      label: "email",
      placeholder: "Email....",
      isError: false,
      errMessage: "email can not empty",
    },
    password: {
      id: "password",
      type: "password",
      value: "",
      label: "Password",
      placeholder: "Password...",
      isError: false,
      errMessage: "password can not empty",
    },
    confirmPassword: {
      id: "confirmPassword",
      type: "password",
      value: "",
      label: "Confirm Password",
      placeholder: "Password....",
      isError: false,
      errMessage: "passWord can not be empty",
    },
  };

  const [formData, setFormData] = useState(defaultFormValues);

  const handleChange = (e) => {
    const userInputData = { ...formData };
    const key = e.target.id;
    const value = e.target.value;

    userInputData[key].value = value;
    setFormData(userInputData);
    isValidForm()
  };

  const isValidForm =()=>{
    const copyData = {...formData};
    Object.keys(copyData).forEach((key)=>{
        copyData[key].isError = !copyData[key].value ? true : false
    })

    setFormData(copyData);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    isValidForm();
    

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => {
          return (
            <div>
              <label className="label">{formData[key].label}</label>
              <input
                id={formData[key].id}
                className={
                  formData[key].isError ? "errorClass" : "nonErrorClass"
                }
                type={formData[key].type}
                placeholder={formData[key].placeholder}
                value={formData[key].value}
                onChange={handleChange}
              ></input>
              <div>{formData[key].isError ? formData[key].errMessage : ""}</div>

            </div>
          );
        })}
        <div>
            <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
