import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";

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
            newMessageText: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._rerenderTree(this._state);
    }
}

let defaultState = {
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
        newMessageText: ''
    },
    profilePage: {
        posts: [
            { likes: 0, text: "Buy beer" },
            { likes: 15, text: "Drinked beer" },
            { likes: 32, text: "oaoa" }
        ],
        newPostText: ''
    }
}



window.store = store;

export default store;