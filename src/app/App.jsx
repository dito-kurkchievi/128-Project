import './styles/_global.css';
import { Header } from '../organismes/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { MasterTemplate } from '../templates/MasterTemplate/MasterTemplate';
import { routerConfig } from './config/routerConfig';

const App = () => {

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