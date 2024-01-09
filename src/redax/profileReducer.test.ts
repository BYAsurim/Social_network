import {addPostAC, PostPropsType, ProfilePropsType, profileReducer} from "./profileReducer";

it('new post should be added', () => {
    let action = addPostAC('newText')
    let startState = {
        posts: [
            {id: '1', post: "Сегодня замечательный день!", likecount: 10},

        ] as Array<PostPropsType>,
        profile: {} as ProfilePropsType,
        status: '',
        profileEditMode: false
    }
    let finishState = profileReducer(startState, action)

    expect(finishState.posts.length).toBe(2)

})