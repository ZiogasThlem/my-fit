import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './ReduxParts/store';
import { Provider } from 'react-redux';
import { initialize } from './keycloak';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<h1>connecting</h1>)

initialize()
  .then(()=> {
  root.render(
    <Provider store = { store }>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>  
  );
  })
  .catch(()=> {
    root.render(<h1>can't connect</h1>)
  })

reportWebVitals();
