
export default function  welcomeReducer(state ='', action){
    switch (action.type) {
        case 'CHANGE_TEXT':
            return action.value;
        default:
            return state
    }
}

