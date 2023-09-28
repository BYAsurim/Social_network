import React from 'react';
import {addMessageAC, UpDateNewTextMessageAC} from "../../redax/dialogsReduser";
import Dialogs from "./Dialogs";
import {AppStore} from "../../redax/redux-store";

export type DialogsPropsType = {
    // dialogsPage: DialogsPageType
    // dispatch: (action: ActionsType) => void
    store: AppStore
}


const DialogsContainer = (props: DialogsPropsType) => {

const state = props.store.getState()

    const onAddMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const onChangeInputMessage = (newText:string) => {
            props.store.dispatch(UpDateNewTextMessageAC(newText))
    }

    return (
       <Dialogs  onAddMessage={onAddMessage}
                 onChangeInputMessage={onChangeInputMessage}
                 state={state.dialogsReduser}
       />
    )
}
export default DialogsContainer;



