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

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = { likes: 13, text: state.newPostText };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state           
        default:
            return state;
    }
}

export default profileReducer;