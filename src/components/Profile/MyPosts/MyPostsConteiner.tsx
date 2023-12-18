import {addPostAC} from "../../../redax/profileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redax/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";


// type MyPostsPropsType = {
//     // profilePage: PostPropsTypeArray
//     // dispatch: (action: ActionsType) => void
//     // store:AppStore
// }

// const MyPostsContainer = (props: MyPostsPropsType) => {
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//
//                 const addPost = () => {
//                     store.dispatch(addPostAC())
//                 }
//
//                 const onPostChange = (text: string) => {
//                     store.dispatch(UpDateNewTextPostAC(text))
//                 }
//
//
//                 return <div>
//                     <MyPosts
//                         onPostChange={onPostChange}
//                         addPost={addPost}
//                         profilePage={store.getState().profileReduser}
//                     />
//                 </div>
//             }
//
//         }</StoreContext.Consumer>
//     );
// };

type mapDispatchToPropsType = {
    addPost: (post:string)=>void
    // onPostChange: (text: string)=> void
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