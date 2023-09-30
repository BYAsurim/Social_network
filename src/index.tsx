import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redax/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";




export const rerenderThree = () => {
    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderThree()
store.subscribe(rerenderThree)