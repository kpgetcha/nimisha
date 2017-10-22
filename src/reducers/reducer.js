import { defaultState } from '../data/testData';

const tasks = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                }
            ]
        default:
            return state;
    }
};

export default tasks;