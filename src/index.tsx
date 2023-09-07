import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, subscribe, upDateNewPostText} from "./redax/state";




export const rerenderThree = ()=>{
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             upDateNewPostText={upDateNewPostText}
        />,
        document.getElementById('root')
    );
}
rerenderThree()
subscribe(rerenderThree)