let initialState = {
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Valera' },
            { id: 2, name: 'Kesha' },
            { id: 3, name: 'Dasha' },
            { id: 4, name: 'Serega' }
        ],
        messages: [
            { id: 1, text: "Где деньги?" },
            { id: 2, text: "Buy beer" },
            { id: 3, text: "Lets go" },
            { id: 4, text: "Sheet" }
        ],
        newMessageText: ''
    },
    profilePage: {
        posts: [
            { id: 1, likes: 0, text: "Buy beer" },
            { id: 2, likes: 15, text: "Drinked beer" },
            { id: 3, likes: 32, text: "oaoa" }
        ],
        newPostText: ''
    },
    friendsPage: {
        users: [],
        pageSize: 10,
        totalCount: 0,
        currentPage: 1
    }
}

export default initialState;