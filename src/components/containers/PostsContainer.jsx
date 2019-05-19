import {connect} from 'react-redux'
import Posts from '../presentations/Posts'
import {addPost, clapPost, deletePost} from '../../actions/actionTypes'

const mapStateToProps = (state) => ({
  todos: state
})

export default connect(
  mapStateToProps,
  {addPost, clapPost, deletePost}
)(Posts)
