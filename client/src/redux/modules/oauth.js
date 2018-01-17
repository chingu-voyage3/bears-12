export function toggleLoggedIn(bool) {
    return {
        type: 'TOGGLE_LOGGED_IN',
        loggedIn: bool
    };
}

export function setRedirectUrl(URL) {
    return {
        type: 'SET_REDIRECT_URL',
        redirectUrl: URL
    };
}

export function navigateTo(URL) {
    return {
        type: 'NAVIGATE_TO',
        navigateTo: URL
    };
}

export default function loggedInReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_LOGGED_IN':
            return Object.assign({}, state, {
                loggedIn: action.loggedIn
            });
        case 'SET_REDIRECT_URL':
            return Object.assign({}, state, {
                redirectUrl: action.redirectUrl
            });
        case 'NAVIGATE_TO':
            return Object.assign({}, state, {
                navigateTo: URL
            });
        default:
            return state;
    }
}