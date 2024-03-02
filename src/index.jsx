import ReactDOM from 'react-dom/client';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import './app/config/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
