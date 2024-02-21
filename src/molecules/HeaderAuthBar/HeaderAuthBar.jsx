import { useNavigate } from "react-router-dom";
import classes from "./HeaderAuthBar.module.css";
import { Button } from 'primereact/button';

const HeaderAuthBar = () => {
  const navigation = useNavigate();


  const onSignInClicked = () => {
    navigation('/sign-in');
  }

  const onSignUpClicked = () => {
    navigation('/sign-up');
  }

  return (
    <div className={classes.HeaderAuthBar}>
      <Button onClick={onSignInClicked}>Sign In</Button>
      <Button onClick={onSignUpClicked}>Sign Up</Button>
    </div>
  );
};

export { HeaderAuthBar }