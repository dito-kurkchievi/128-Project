import { Button } from "primereact/button";
import classes from "./Cart.module.css";
import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from "react";
import { CartProductList } from "../CartProductList/CartProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../../app/store/model/slices/cartSlice";
import { useCartLocalStorage } from "../../app/shared/hooks/useCartLocalStorage";
import { useNavigate } from "react-router-dom";


const Cart = (props) => {
  const op = useRef(null);
  const dispatch = useDispatch();
  const { cart, clear } = useCartLocalStorage();
  const navigate = useNavigate();


  const clearCart = () => {
    dispatch(cartActions.clear());
    clear();
  }

  const goToCheckout = () => {
    navigate('/checkout');
  }

  return (
    <div className={classes.Cart}>
      <Button icon="pi pi-shopping-cart" onClick={(e) => op.current.toggle(e)}></Button>
      <OverlayPanel ref={op} showCloseIcon closeOnEscape>
        <CartProductList />
        {Boolean(cart.length) && (
          <>
            <Button onClick={clearCart}>Clear</Button>
            <Button onClick={goToCheckout}>Checkout</Button>
          </>
        )}
      </OverlayPanel>
    </div>
  );
};

export { Cart }