import { useNavigate } from "react-router-dom";
import classes from "./HeaderAuthBar.module.css";
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../app/store/model/selectors/user/userSelectors";
import { userActions } from "../../app/store/model/slices/userSlice";
import { Avatar } from 'primereact/avatar';

const HeaderAuthBar = () => {
  const navigation = useNavigate();
  const user = useSelector(getUser);
  const dispatch = useDispatch();


  const onSignInClicked = () => {
    navigation('/sign-in');
  }

  const onSignUpClicked = () => {
    navigation('/sign-up');
  }

  const logOut = () => {
    dispatch(userActions.logOut())
  }

  if (user) {
    return (
      <div className={classes.HeaderAuthBar}>
        <div className={classes.avatarContainer}>
          <Avatar
            label={`${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`}
            size="xlarge"
            shape="circle"
          />
          <span>{user.firstName} {user.lastName}</span>
        </div>
        <Button onClick={logOut}>Log out</Button>
      </div>
    )
  }

  return (
    <div className={classes.HeaderAuthBar}>
      <Button onClick={onSignInClicked}>Sign In</Button>
      <Button onClick={onSignUpClicked}>Sign Up</Button>
    </div>
  );
};

export { HeaderAuthBar }