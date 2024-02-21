import classes from "./SignInPage.module.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
        

const SignInPage = (props) => {

  return (
    <div className={classes.SignInPage}>
      <Card>
        <div className={classes.panel}>
          <h1>Sign in</h1>
          <InputText placeholder="Email" />
          <InputText type="password" placeholder="Password" />

          <Button>Login</Button>      
        </div>
      </Card>
    </div>
  );
};

export { SignInPage };