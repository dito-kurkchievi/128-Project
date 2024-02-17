import ReactDOM from 'react-dom/client';
import "primereact/resources/themes/lara-dark-cyan/theme.css";
import App from './atoms/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './atoms/store/store';
import './atoms/config/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
