import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsConteiner";
import store from "./redax/redux-store";
import UsersContainer from "./components/Users/UsersConteiner";



type AppPropsType = {
    // store: StorePropsType
    // store: AppStore
}


const App: React.FC<AppPropsType> = (props) => {
    // const state = props.store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
           <Navbar friends={store.getState().navbarReduser}/>


            <div className={'app-wrapper-content'}>

                <Route path={'/dialogs'} render={() => <DialogsContainer

                    // store={props.store}
                />}/>
                <Route path={'/profile'} render={() => <Profile
                    // store={props.store}
                />}/>
                <Route path={'/users'} render={()=><UsersContainer/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                <Route path={'/friends'} render={() => <Friends/>}/>
            </div>
        </div>
    );
}


export default App;





