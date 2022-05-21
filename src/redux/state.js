let rerenderTree = () => {
    console.log('state was changed')
}

let state = {
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Valera' },
            { id: 2, name: 'Kesha' },
            { id: 3, name: 'Dasha' },
            { id: 4, name: 'Serega' }
        ],
        messages: [
            "Где деньги?", "Buy beer", "Lets go", "Sheet"
        ],
        newMessageText: 'wdwd'
    },
    profilePage: {
        posts: [
            { likes: 0, text: "Buy beer" },
            { likes: 15, text: "Drinked beer" },
            { likes: 32, text: "oaoa" }
        ],
        newPostText: ''
    }
};

export const addPost = () => {
    let newPost = { likes: 13, text: state.profilePage.newPostText};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderTree(state);
};

export const updateNewPostTextArea = (text) => {
    state.profilePage.newPostText = text;
    rerenderTree(state);
};

export const sendMessage = () => {
    let message = state.dialogsPage.newMessageText;
    state.dialogsPage.messages.push(message);
    state.dialogsPage.newMessageText = '';
    rerenderTree(state);
}

export const subscribe = (observer) => {
    rerenderTree = observer;
}

export const updateNewMessageTextArea = (text) => {
    state.dialogsPage.newMessageText = text;
    rerenderTree();
}

export default state;