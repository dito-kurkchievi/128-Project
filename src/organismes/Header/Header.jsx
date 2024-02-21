import { Logo } from '../../atoms/Logo/Logo';
import { HeaderAuthBar } from '../../molecules/HeaderAuthBar/HeaderAuthBar';
import { NavigationBar } from '../../molecules/NavigationBar/NavigationBar';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.Header}>
      <Logo />
      <NavigationBar />
      <HeaderAuthBar />
    </header>
  );
}

export { Header };