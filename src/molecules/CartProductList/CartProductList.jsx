import { useSelector } from "react-redux";
import classes from "./CartProductList.module.css";
import { getCart } from "../../app/store/model/selectors/cart/cartSelectors";
import { v4 } from "uuid";


const CartProductList = (props) => {
  const cartData = useSelector(getCart)

  return (
    <div className={classes.CartProductList}>
      {cartData.map(prod => {
        return (
          <div key={v4()} className={classes.productCard}>
            <img src={prod.images[0]} alt="prod" />
            <p>{prod.name}</p>
            <p>{prod.price}</p>
          </div>
        )
      })}
    </div>
  );
};

export { CartProductList };