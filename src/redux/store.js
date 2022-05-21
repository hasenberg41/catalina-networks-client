let store = {
    _state: {
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
    },
    
    getState() {
        return this._state;
    },

    _rerenderTree() {
        console.log('state was changed')
    },

    addPost() {
        let newPost = { likes: 13, text: this._state.profilePage.newPostText };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderTree(this._state);
    },

    updateNewPostTextArea(text) {
        this._state.profilePage.newPostText = text;
        this._rerenderTree(this._state);
    },

    sendMessage() {
        let message = this._state.dialogsPage.newMessageText;
        this._state.dialogsPage.messages.push(message);
        this._state.dialogsPage.newMessageText = '';
        this._rerenderTree(this._state);
    },

    subscribe(observer) {
        this._rerenderTree = observer;
    },

    updateNewMessageTextArea(text) {
        this._state.dialogsPage.newMessageText = text;
        this._rerenderTree(this._state);
    }
}

export default store;