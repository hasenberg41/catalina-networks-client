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
        ]
    },
    profilePage: {
        posts: [
            { likes: 0, text: "Buy beer" },
            { likes: 15, text: "Drinked beer" },
            { likes: 32, text: "oaoa" }
        ]
    }
};

export let addPost = (text) => {
    let newPost = { likes: 13, text: text};
    state.profilePage.posts.push(newPost);
    console.log(newPost)
};

export default state;