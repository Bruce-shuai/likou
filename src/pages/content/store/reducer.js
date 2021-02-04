import { fromJS } from 'immutable';

const defaultState = fromJS({
    talkBtn: false,
    answerBtn: false
});

export default (state = defaultState, action) => {
    if (action.type === 'talk_btn') {
        return state.set('talkBtn', action.btn ? false : true)
    }
    if (action.type === 'answer_btn') {
        return state.set('answerBtn', action.btn ? false : true)
    }
    return state;
}