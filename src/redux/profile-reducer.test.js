import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 10 },
        { id: 2, message: 'This is my first post!', likesCount: 15 }
    ]
};

test('length of posts should be incremented', () => {
    // 1. Test data
    let action = addPostCreator('new post');

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    // 1. Test data
    let action = addPostCreator('new post');

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts[2].message).toBe("new post");
});

test('after deleting length of message array should be decrement', () => {
    // 1. Test data
    let action = deletePost(1);

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(1);
});

test(`length of message array shouldn't be decrement if id is incorrect`, () => {
    // 1. Test data
    let action = deletePost(100);

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(2);
});