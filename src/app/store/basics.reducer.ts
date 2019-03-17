import * as basicsAction from './basics.action';

const initialState = {
    count: 0,
    loggedIn: false,
    users: [],
    quotes: []
}

export function basicReducer(state = initialState, action: basicsAction.basicsAction) {
    switch (action.type) {
        case basicsAction.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case basicsAction.LOGIN_USER:
            return {
                ...state,
                loggedIn: action.payload
            }
        case basicsAction.ADD_QUOTE:
            return {
                ...state,
                quotes: [...state.quotes, action.payload]
            }
        case basicsAction.ADD_QUOTES:
            return {
                ...state,
                quotes: [...state.quotes, ...action.payload]
            }
    }
    return state;
}