import { combineReducers } from 'redux-immutable';
import { reducer as SubReducer } from '../pages/submission/store';
import { reducer as DisReducer } from '../pages/discussion/store';
import { reducer as ContReducer } from '../pages/content/store';

export default combineReducers({  
    content: ContReducer,  
    submission: SubReducer,
    discussion: DisReducer
})
