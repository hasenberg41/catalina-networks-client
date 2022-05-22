import initialState from "../initialState";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addNewPostCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextAreaCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    }
}

const profileReducer = (state = initialState.profilePage, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = { id: state.posts.length + 1, likes: 13, text: state.newPostText };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        default:
            return state;
    }
}

export default profileReducer;