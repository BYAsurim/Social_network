import React from 'react';
import {addMessageAC, UpDateNewTextMessageAC} from "../../redax/dialogsReduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

export type DialogsPropsType = {
    // store: AppStore
}


const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) =>{
                const state = store.getState()

                const onAddMessage = () => {
                    store.dispatch(addMessageAC())
                }
                const onChangeInputMessage = (newText: string) => {
                    store.dispatch(UpDateNewTextMessageAC(newText))
                }

                return (
                <Dialogs onAddMessage={onAddMessage}
                         onChangeInputMessage={onChangeInputMessage}
                         state={state.dialogsReduser}
                />)}
        }</StoreContext.Consumer>
    )
}
export default DialogsContainer;



