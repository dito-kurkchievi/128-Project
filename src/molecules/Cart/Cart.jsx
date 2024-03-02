import { Button } from "primereact/button";
import classes from "./Cart.module.css";
import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from "react";
import { CartProductList } from "../CartProductList/CartProductList";


const Cart = (props) => {
  const op = useRef(null);

  return (
    <div className={classes.Cart}>
      <Button icon="pi pi-shopping-cart" onClick={(e) => op.current.toggle(e)}></Button>
      <OverlayPanel ref={op} showCloseIcon closeOnEscape>
        <CartProductList />
      </OverlayPanel>
    </div>
  );
};

export { Cart }