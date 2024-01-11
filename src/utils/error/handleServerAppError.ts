import {Dispatch} from "redux";
import {setErrorMessageAC} from "../../redax/appReducer";

export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch) => {
    if (data.messages.length) {
        dispatch(setErrorMessageAC(data.messages[0]));
    } else {
        dispatch(setErrorMessageAC("Some error occurred"));
    }
};

export type ResponseType<D = {}> = {
    resultCode: number;
    messages: Array<string>;
    data: D;
};