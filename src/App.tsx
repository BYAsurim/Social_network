import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StorePropsType} from "./redax/state";
import Friends from "./components/Friends/Friends";


type AppPropsType = {
    store: StorePropsType
    // addPost: () => void
    // upDateNewPostText:(text:string)=> void

}


const App: React.FC<AppPropsType> = (props) =>{
const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={state}/>
                <div className={'app-wrapper-content'}>


                    <Route path={'/dialogs'} render={() => <Dialogs data={state.dialogsPage.profile}
                                                                    messages={state.dialogsPage.messages}

                    />}/>
                    <Route path={'/profile'} render={() => <Profile
                        addPost={props.store.addPost.bind(props.store)}
                        profilePage={state.profilePage}
                        upDateNewPostText={props.store.upDateNewPostText.bind(props.store)}

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





