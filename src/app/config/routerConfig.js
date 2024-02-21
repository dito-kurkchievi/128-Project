import { AboutPage } from "../../pages/AboutPage/AboutPage";
import { MainPage } from "../../pages/MainPage/MainPage";
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
  }
]