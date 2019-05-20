import {
  ADD_POST,
  CLAP_POST,
  DELETE_POST
} from '../actions/post'

const PostsReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          text: action.payload.text,
          clap: 0
        }
      ]
    case CLAP_POST: 
      return state.map((val, idx) => {
        if(action.payload.clap === idx)
          return Object.assign({}, val,{
            clap: val.clap + 1
          })
        return val
      })
    case DELETE_POST:
      return state.filter((val, idx) => {
        return action.payload.id !== idx
      })
    default: 
      return state
  }
}

export default PostsReducer