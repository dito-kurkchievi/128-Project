import { AppLink } from "../../atoms/AppLink/AppLink";
import classes from './NavigationBar.module.css';

const NavigationBar = () => {

  return (
    <nav>
      <ul className={classes.navbar}>
        <li><AppLink to={'/'}>Home</AppLink></li>
        <li><AppLink to={'/'}>Products</AppLink></li>
        <li><AppLink to={'/about-us'}>About Us</AppLink></li>
      </ul>
    </nav>
  );
}

export { NavigationBar };