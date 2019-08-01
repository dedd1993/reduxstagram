function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            // return the new instance with the new comment
            return [...state, {
                user: action.author,
                text: action.comment,
            }];
        case 'REMOVE_COMMENT':
            // we need to return the new state without the deleted comment
            return [
                ...state.filter((comment, index) => index !== action.i )
            ];
        default:
            return state;
    }
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        };
    }
    return state;
}

export default comments;