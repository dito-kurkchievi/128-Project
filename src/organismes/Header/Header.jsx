import { memo } from 'react';
import { Logo } from '../../atoms/Logo/Logo';
import { Cart } from '../../molecules/Cart/Cart';
import { HeaderAuthBar } from '../../molecules/HeaderAuthBar/HeaderAuthBar';
import { NavigationBar } from '../../molecules/NavigationBar/NavigationBar';
import classes from './Header.module.css';

const Header = memo(() => {
  return (
    <header className={classes.Header}>
      <Logo />
      <NavigationBar />
      <div className={classes.rightSide}>
        <Cart />
        <HeaderAuthBar />
      </div>
    </header>
  );
})

Header.displayName = "Header";
export default Header;