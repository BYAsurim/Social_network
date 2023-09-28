import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from "./redax/state";


export const rerenderThree = () => {
    ReactDOM.render(
        <App store={store}

        />,
        document.getElementById('root')
    );
}
rerenderThree()
store.subscribe(rerenderThree)