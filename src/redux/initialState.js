let initialState = {
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

export default initialState;