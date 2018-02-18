import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import './index.css';
import App from './App';
import Reducers from "./states/reducers";
import registerServiceWorker from './registerServiceWorker';

// Buat store dari reducer
const store = createStore(Reducers);

ReactDOM.render(
  	// Buat store ada untuk semua container component
  	// tanpa mem-passing-nya secara langsung
  	<Provider store={store}>
    	<App />
  	</Provider>,
  	document.getElementById("root")
);
registerServiceWorker();