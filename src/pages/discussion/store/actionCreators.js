import axios from 'axios';

const addDisList = (result) => {
  return ({
    type: 'discussion_data',
    data: result
  })
}

export const MoreDisList = () => {
  return (dispatch) => {
    axios.get('/api/discussion.json').then((res) => {
      dispatch(addDisList(res.data.data));
    }) 
  }
}