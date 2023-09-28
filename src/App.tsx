import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {AppStore} from "./redax/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsConteiner";


type AppPropsType = {
    // store: StorePropsType
    store: AppStore
}


const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={state.navbarReduser}/>
                <div className={'app-wrapper-content'}>

                    <Route path={'/dialogs'} render={() => <DialogsContainer
                        // dialogsPage={state.dialogsReduser}
                        // dispatch={props.store.dispatch.bind(props.store)}
                        store={props.store}
                    />}/>
                    <Route path={'/profile'} render={() => <Profile
                        // dispatch={props.store.dispatch.bind(props.store)}
                        // profilePage={state.profileReduser}
                        store={props.store}
                    />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/friends'} render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;





