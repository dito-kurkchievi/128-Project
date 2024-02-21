import classes from "./SignUpPage.module.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const SignUpPage = (props) => {

  return (
    <div className={classes.SignUpPage}>
      <Card>
        <div className={classes.panel}>
          <h1>Sign Up</h1>
          <InputText placeholder="First Name..." />
          <InputText placeholder="Last Name..." />
          <InputText placeholder="Email" />
          <InputText type="password" placeholder="Password" />

          <Button>Register</Button>      
        </div>
      </Card>
    </div>
  );
};

export { SignUpPage };