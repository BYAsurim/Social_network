import React, {ComponentClass, lazy} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
//import DialogsContainer from "./components/Dialogs/DialogsConteiner";
import store, {AppStateType} from "./redax/redux-store";
//import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedTC} from "./redax/appReducer";
import Preloader from "./components/common/preloader/Preloader";
import {WithSuspense} from "./hoc/WithSuspense";
import {ErrorMessage} from "./components/common/ErrorMessage";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsConteiner"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));


type AppPropsType = {
    initializedApp: () => void
} & MapStateToPropsType

type MapStateToPropsType = {
    initialized: boolean
    error: string | null
}


class App extends React.Component<AppPropsType, unknown> {

    componentDidMount() {
        this.props.initializedApp()

        // window.addEventListener("unhandledrejection", function (promiseRejectionEvent) {
        //     // handle error here, for example log
        // });
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar friends={store.getState().navbarReducer}/>
                <div className={'app-wrapper-content'}>
                    {/*<Route path={'/dialogs'} render={() =>*/}
                    {/*    <Suspense fallback={<Preloader/>}>*/}
                    {/*        <DialogsContainer/>*/}
                    {/*    </Suspense>*/}
                    {/*}/>*/}
                    {/*<Route path={'/users'} render={() =>*/}
                    {/*    <Suspense fallback={<Preloader/>}>*/}
                    {/*        <UsersContainer/>*/}
                    {/*    </Suspense>*/}
                    {/*}/>*/}
                    <Switch>
                        <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/dialogs'} render={WithSuspense(DialogsContainer)}/>
                        <Route path={'/users'} render={WithSuspense(UsersContainer)}/>
                        <Route path={'/news'} component={News}/>
                        <Route path={'/music'} component={Music}/>
                        <Route path={'/settings'} component={Settings}/>
                        <Route path={'/friends'} render={() => <Friends/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path={'*'} render={() => <Redirect to={'/404'}/>}/>
                        <Route path={'/404'} render={() => <div>NOT FOUND</div>}/>
                    </Switch>
                </div>
                <div className={'error-message'}>
                    <ErrorMessage error={this.props.error}/>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.appReducer.initialized,
        error: state.appReducer.error
    }
}

export default compose<ComponentClass>(
    withRouter,
    connect(
        mapStateToProps,
        {initializedApp: initializedTC}
    ))(App)






