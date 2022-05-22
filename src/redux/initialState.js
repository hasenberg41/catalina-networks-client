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
        users: [
            {
                id: 1, followed: false, fullName: 'Жека',
                status: 'Сижу и смотрю на небо',
                location: { city: 'Симферополь', country: 'Россия' }
            },
            {
                id: 2, followed: true, fullName: 'Егор',
                status: 'я валера',
                location: { city: 'Самара', country: 'Россия' }
            },
            {
                id: 3, followed: false, fullName: 'Алексей',
                status: 'Лежу и смотрю на люстру',
                location: { city: 'Киев', country: 'Украина' }
            }
        ]
    }
}

export default initialState;