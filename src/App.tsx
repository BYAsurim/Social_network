import React, {ComponentClass} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsConteiner";
import store, {AppStateType} from "./redax/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedTC} from "./redax/appReducer";
import Preloader from "./components/common/preloader/Preloader";


type AppPropsType = {
    initializedApp: () => void
} & MapStateToPropsType

type MapStateToPropsType = {
    initialized: boolean
}


class App extends React.Component<AppPropsType, unknown> {

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized){
            return  <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar friends={store.getState().navbarReducer}/>


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
        )
            ;
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.appReducer.initialized
    }
}

export default compose<ComponentClass>(
    withRouter,
    connect(
        mapStateToProps,
        {initializedApp: initializedTC}
    ))(App)






