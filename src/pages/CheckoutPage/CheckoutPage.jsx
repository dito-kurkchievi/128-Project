import classNames from 'classnames';
import classes from './CheckoutPage.module.css';
import { useSelector } from 'react-redux';
import { getCart } from '../../app/store/model/selectors/cart/cartSelectors';
import { Navigate, useNavigate } from 'react-router-dom';
import { Layout } from '../../templates/Layout/Layout';
import { getUser } from '../../app/store/model/selectors/user/userSelectors';
import { v4 } from 'uuid';
import { Button } from 'primereact/button';

export const CheckoutPage = () => {
  const cart = useSelector(getCart);
  const user = useSelector(getUser);
  const navigate = useNavigate();


  const calculateTotalSum = () => {
    const sum = cart.reduce((acc, product) => {
      acc += product.price;
      return acc;
    }, 0);

    return sum;
  }

  const onPayClicked = () => {
    const totalPrice = calculateTotalSum();

    if (user.balance >= totalPrice) {
      navigate('/checkout/success');
      return;
    }

    navigate('/checkout/fail');
  }


  if (!cart.length) {
    return <Navigate to={'/'} />
  }


  return (
    <div className={classNames(classes.CheckoutPage)}>
      <Layout>
        <>
          <h1>Balance: {user.balance}₾</h1>
          {cart.map(prod => {
            return (
              <div key={v4()} className={classes.card}>
                <img src={prod.images[0]} alt="image" />
                <div className={classes.cardInfo}>
                  <h2>{prod.title}</h2>
                  <span>{prod.category.join(', ')}</span>
                  <p>{prod.price}₾</p>
                </div>
              </div>
            )
          })}

          <h2>Total Sum: {calculateTotalSum()}₾</h2>
          <Button onClick={onPayClicked}>Pay</Button>
        </>
      </Layout>
    </div>
  );
};