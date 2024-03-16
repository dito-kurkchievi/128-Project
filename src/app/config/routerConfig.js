import { AboutPage } from "../../pages/AboutPage/AboutPage";
import { CheckoutPage } from "../../pages/CheckoutPage/CheckoutPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import { PaymentFail } from "../../pages/PaymentFail/PaymentFail";
import { PaymentSuccess } from "../../pages/PaymentSuccess/PaymentSuccess";
import { SignInPage } from "../../pages/SignInPage/SignInPage";
import { SignUpPage } from "../../pages/SignUpPage/SignUpPage";

export const routerConfig = [
  {
    id: 0,
    path: '/',
    element: MainPage,
    header: true,
  },
  {
    id: 1,
    path: '/about-us',
    element: AboutPage,
    header: true,
  },
  {
    id: 2,
    path: '/sign-in',
    element: SignInPage,
    header: false,
  },
  {
    id: 3,
    path: '/sign-up',
    element: SignUpPage,
    header: false,
  },
  {
    id: 4,
    path: '/checkout',
    element: CheckoutPage,
    header: true,
  },
  {
    id: 5,
    path: '/checkout/success',
    element: PaymentSuccess,
    header: true,
  },
  {
    id: 6,
    path: '/checkout/fail',
    element: PaymentFail,
    header: true,
  }
]