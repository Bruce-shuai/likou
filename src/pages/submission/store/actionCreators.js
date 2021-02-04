import axios from 'axios';
import { fromJS } from 'immutable';


const addsubList = (result) => {
    return ({
        type: 'data',
        data: result
    })
}  


export const MoreList = () => {
    return (dispatch) => {
      axios.get('/api/submission.json').then((res) => {
        // console.log(res.data.data);
        const result = res.data.data;
        dispatch(addsubList(result));
      })
    }
  }