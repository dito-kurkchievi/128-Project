import classes from "./SignInPage.module.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useFormik } from "formik";
import * as yup from 'yup';
import { classNames } from "primereact/utils";
import { $api, TOKEN_LOCAL_STORAGE_KEY } from "../../app/config/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../app/store/model/slices/userSlice";


const validationSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('this field is required'),
  password: yup.string().min(8, 'minimal length is 8').max(16, 'maximum length is 16').required(),
})



const SignInPage = (props) => {
  const navigation = useNavigate();
  const [authError, setAuthError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await $api.post('/auth', {
          email: values.email,
          password: values.password
        })

        
        localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, response.data.token);
        
   
        const userProfile = await $api.get('/profile');
        setIsLoading(false);
        
        if(userProfile.data) {
          dispatch(userActions.setUser(userProfile.data))
        }

        if (response.status === 200) {
          navigation('/');
        }
      }
      catch(e) {
        setAuthError('Email or Password is Incorrect');
        setIsLoading(false);
      }
    }
  })

  const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);


  const onLoginClicked = () => {
    formik.handleSubmit();
  }

  return (
    <div className={classes.SignInPage}>
      <Card>
        <div className={classes.panel}>
          <h1>Sign in</h1>
          <InputText
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
            className={classNames({
              'p-invalid': isFormFieldInvalid('email')
            })}
          />
          {isFormFieldInvalid('email') && (
            <span className={classes.error}>{formik.errors.email}</span>
          )}
          <InputText
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            placeholder="Password"
            className={classNames({
              'p-invalid': isFormFieldInvalid('password')
            })}
          />
          {isFormFieldInvalid('password') && (
            <span className={classes.error}>{formik.errors.password}</span>
          )}

          {
            authError && (
              <div className={classes.errorContainer}>{authError}</div>
            )
          }

          <Button onClick={onLoginClicked} loading={isLoading}>Login</Button>
        </div>
      </Card>
    </div>
  );
};

export { SignInPage };