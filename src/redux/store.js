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

    subscribe(observer) {
        this._rerenderTree = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = { likes: 13, text: this._state.profilePage.newPostText };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderTree(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text;
            this._rerenderTree(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let message = this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.messages.push(message);
            this._state.dialogsPage.newMessageText = '';
            this._rerenderTree(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.text;
            this._rerenderTree(this._state);
        }
    }
}

window.store = store;

export default store;