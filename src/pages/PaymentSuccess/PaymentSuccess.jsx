import { useDispatch } from "react-redux";
import { Layout } from "../../templates/Layout/Layout";
import { useCartLocalStorage } from "../../app/shared/hooks/useCartLocalStorage";
import { useEffect } from "react";
import { cartActions } from "../../app/store/model/slices/cartSlice";

export const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const { clear } = useCartLocalStorage();


  useEffect(() => {
    dispatch(cartActions.clear());
    clear();
  }, [])

  return (
    <Layout>
      <h1>Payment Success!</h1>
    </Layout>
  );
};