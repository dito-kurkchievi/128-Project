import { useEffect, useState } from "react"
import { useSSR } from "react-i18next"
import { useSelector } from "react-redux";
import { getCart } from "../../store/model/selectors/cart/cartSelectors";

export const useCartLocalStorage = () => {
  const [cart, setCart] = useState([]);
  const cartData = useSelector(getCart);
  
  useEffect(() => {
    const savedProducts = localStorage.getItem('cart');

    if(savedProducts) {
      setCart(JSON.parse(savedProducts))
    }
  }, [])
  

  useEffect(() => {
    if(cartData.length) {
      sync();
      setCart(cartData);
    }
  }, [cartData])



  const sync = () => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  }

  const clear = () => {
    localStorage.removeItem('cart');
    setCart([]);
  }


  return {
    cart,
    clear
  }
}