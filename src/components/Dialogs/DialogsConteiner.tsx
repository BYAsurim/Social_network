import {FC} from 'react';
import {addMessageAC, DialogsPageType} from "../../redax/dialogsReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    onAddMessage: (newMessage:string) => void

}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsReduser
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onAddMessage: (newMessage) => {
            dispatch(addMessageAC(newMessage))
        },
    }
}

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
// const AuthRedirectComponent = WithAuthRedirect(DialogsContainer)
// export default AuthRedirectComponent;
export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs)





