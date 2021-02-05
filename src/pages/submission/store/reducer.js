import { fromJS } from 'immutable';

const defaultState = fromJS({
    data: []
});

export default (state = defaultState, action) => {
    if (action.type === 'submission_data') {
        // console.log(action.data);
        return state.set('data', action.data);
    }
    return state;
}