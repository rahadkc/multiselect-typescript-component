import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import './index.css';
import store from './store/configureStore';


// function render() {
//   const App = require('./app/App').default
//   ReactDOM.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// render()

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./app/App', render)
// }