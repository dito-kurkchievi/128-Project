import classes from "./SignUpPage.module.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useFormik } from "formik";
import * as yup from "yup";
import { useFormValidation } from "../../app/shared/hooks/useFormValidation";
import { classNames } from "primereact/utils";
import { $api } from "../../app/config/api";
import { useDispatch } from "react-redux";
import { userActions } from "../../app/store/model/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const validation = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
})

const SignUpPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await $api.post('/users', values);
        setIsLoading(false);
        
        if(response.status === 201){
           navigate('/sign-in')
        }
      }
      catch(e) {
        setError(e.message);
        setIsLoading(false);
      }
    }
  })

  const { isFormFieldInvalid } = useFormValidation(formik);



  return (
    <div className={classes.SignUpPage}>
      <Card>
        <div className={classes.panel}>
          <h1>Sign Up</h1>
          <InputText
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            placeholder="First Name..."
            className={classNames({
              'p-invalid': isFormFieldInvalid('firstName')
            })}
          />
          {isFormFieldInvalid('firstName') && (
            <span className={classes.error}>{formik.errors.firstName}</span>
          )}
          <InputText
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            placeholder="Last Name..."
            className={classNames({
              'p-invalid': isFormFieldInvalid('lastName')
            })}
          />
          {isFormFieldInvalid('lastName') && (
            <span className={classes.error}>{formik.errors.lastName}</span>
          )}
          <InputText
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            placeholder="Email"
            className={classNames({
              'p-invalid': isFormFieldInvalid('email')
            })}
          />
          {isFormFieldInvalid('email') && (
            <span className={classes.error}>{formik.errors.email}</span>
          )}
          <InputText
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            type="password"
            placeholder="Password"
            className={classNames({
              'p-invalid': isFormFieldInvalid('password')
            })}
          />
          {isFormFieldInvalid('password') && (
            <span className={classes.error}>{formik.errors.password}</span>
          )}

          {error && (
             <div className={classes.errorContainer}>{error}</div>
          )}

          <Button loading={isLoading} onClick={() => formik.handleSubmit()}>Register</Button>
        </div>
      </Card>
    </div>
  );
};

export { SignUpPage };