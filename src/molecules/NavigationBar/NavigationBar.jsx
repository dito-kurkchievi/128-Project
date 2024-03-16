import { AppLink } from "../../atoms/AppLink/AppLink";
import classes from './NavigationBar.module.css';

const NavigationBar = () => {

  return (
    <nav>
      <ul className={classes.navbar}>
        <li><AppLink to={'/'}><span>Home</span></AppLink></li>
        <li><AppLink to={'/'}><span>Products</span></AppLink></li>
        <li><AppLink to={'/about-us'}><span>About Us</span></AppLink></li>
      </ul>
    </nav>
  );
}

export { NavigationBar };