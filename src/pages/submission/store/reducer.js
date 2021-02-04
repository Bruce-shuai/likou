import { fromJS } from 'immutable';

const defaultState = fromJS({
    data: []
});

export default (state = defaultState, action) => {
    if (action.type === 'data') {
        return state.set('data', action.data);
    }
    return state;
}