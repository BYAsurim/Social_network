import {addPostAC} from "../../../redax/profileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redax/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";



type mapDispatchToPropsType = {
    addPost: (post:string)=>void
}

let mapStateToProps =(state:AppStateType)=>{
    return{
        profilePage: state
    }
}

let mapDispatchToProps =(dispatch:Dispatch):mapDispatchToPropsType=>{
    return{
        addPost:(post:string)=> {
            dispatch(addPostAC(post))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;