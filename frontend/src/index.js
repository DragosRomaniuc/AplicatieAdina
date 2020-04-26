import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider, connect } from 'react-redux';
import store from './Store';
import rootReducer from './Store/rootReducer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
        <App />
    </Provider>
       
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();







// index.js -> Infasoara tot APP-ul intr-un PROVIDER cu STORE  -> 
// cream STORE-UL care contine rootREDUCER ->
// rootReducer contine alte chestii {
//   auth, lectii, user 
// }

// react stie ca de oriunde am accesa functia CONNECT, el ia rootReducerul
// pe care l-am creat

// HEADER.JS -> Cand accesam connect, el stie ca rootReducerul este cel creat deja,
// {
//   auth: {'blabla'},
//   user: {'blabla'},
//   lectii: {'blabla'}
// }

// connect -> injecteaza in header doar ce vrei tu din rootReducer