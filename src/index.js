import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import FormProvider from './store/FormProvider';
import App from './App';
import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <FormProvider>
      <App />
    </FormProvider>
  </BrowserRouter>
);
