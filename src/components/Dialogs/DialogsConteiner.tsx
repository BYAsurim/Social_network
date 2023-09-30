import React from 'react';
import {addMessageAC, DialogsPageType, UpDateNewTextMessageAC} from "../../redax/dialogsReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {Dispatch} from "redux";



// const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
//
//     return (
//         <StoreContext.Consumer>{
//             (store) =>{
//                 const state = store.getState()
//
//                 const onAddMessage = () => {
//                     store.dispatch(addMessageAC())
//                 }
//                 const onChangeInputMessage = (newText: string) => {
//                     store.dispatch(UpDateNewTextMessageAC(newText))
//                 }
//
//                 return (
//                 <Dialogs onAddMessage={onAddMessage}
//                          onChangeInputMessage={onChangeInputMessage}
//                          state={state.dialogsReduser}
//                 />)}
//         }</StoreContext.Consumer>
//     )
// }
type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    onAddMessage: ()=>void
    onChangeInputMessage: (newText: string)=> void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps =(state:AppStateType):MapStateToPropsType=>{

    return{
        dialogsPage: state.dialogsReduser
    }
}
let mapDispatchToProps =(dispatch:Dispatch):MapDispatchToPropsType=>{
    return{
        onAddMessage:()=> {
           dispatch(addMessageAC())
        } ,
        onChangeInputMessage: (newText: string)=> {
            dispatch(UpDateNewTextMessageAC(newText))
        }

    }
}
 const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;



