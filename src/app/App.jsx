import './styles/_global.css';
import { Header } from '../organismes/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { MasterTemplate } from '../templates/MasterTemplate/MasterTemplate';
import { routerConfig } from './config/routerConfig';
import { useEffect } from 'react';
import { $api } from './config/api';
import { useDispatch } from 'react-redux';
import { userActions } from './store/model/slices/userSlice';

const App = () => {
  const dispatch = useDispatch();

  const checkUser = async () => {
    try { 
      const response = await $api.get('/profile');

      if(response.status === 200) {
        dispatch(userActions.setUser(response.data));
      }
    }
    catch(e) {
      console.error(e.message);
    }
  }


  useEffect(() => {
    checkUser();
  }, [checkUser])

  const renderWithWrapper = (route) => {
    const Template = () => {
      return (
        <MasterTemplate Header={route.header && <Header />}>
          {<route.element />}
        </MasterTemplate>
      )
    }

    return (
      <Route key={route.id} path={route.path} element={<Template />} />
    )
  }

  return (
    <Routes>
      {routerConfig.map(renderWithWrapper)}
    </Routes>
  );
}

export default App;