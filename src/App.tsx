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
import {StatePropsType} from "./redax/state";


type AppPropsType = {
    state:StatePropsType

}


function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    {/*<Route path={'/Dialogs'} component={Dialogs}/>*/}
                    {/*<Route path={'/Profile'} component={Profile}/>*/}

                    <Route path={'/Dialogs'} render={() => <Dialogs data={props.state.dialogsPage.profile}
                                                                    messages={props.state.dialogsPage.messages  }

                    />}/>
                    <Route path={'/Profile'} render={() => <Profile  posts={props.state.profilePage.posts} />}/>

                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;




