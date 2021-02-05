import axios from 'axios';

const addList = (result) => {
  return ({
    type: 'content_data',
    disdata: result
  })
}

export const MoreInfo = () => {
  return (dispatch) => {
    axios.get('/api/discussion.json').then((res) => {
      const result = res.data.data
      dispatch(addList(result));
    }) 
  }
}