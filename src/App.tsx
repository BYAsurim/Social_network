import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsConteiner";
import store from "./redax/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/login/Login";


type AppPropsType = {
    // store: StorePropsType
    // store: AppStore
}


const App: React.FC<AppPropsType> = (props) => {
    // const state = props.store.getState()
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar friends={store.getState().navbarReduser}/>


            <div className={'app-wrapper-content'}>

                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                <Route path={'/friends'} render={() => <Friends/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
            </div>
        </div>
    );
}


export default App;





