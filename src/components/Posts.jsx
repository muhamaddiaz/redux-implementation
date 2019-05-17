import React, { Component } from 'react'
import {createStore} from 'redux'
import {addPost, clapPost, deletePost} from '../redux/actionTypes'
import {PostsReducer} from '../redux/reducers'

const store = createStore(PostsReducer)

export class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      posts: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClap = this.handleClap.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  handleSubmit({text}, e) {
    e.preventDefault()
    store.dispatch(addPost(text))
    // this.setState((prev) => ({
    //   posts: [
    //     ...prev.posts,
    //     {
    //       text,
    //       clap: 0
    //     }
    //   ],
    //   text: ""
    // }))
    this.setState({
      posts: store.getState(),
      text: ""
    })
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState(() => ({
      [name]: value
    }))
  }

  handleClap(id) {
    store.dispatch(clapPost(id))
    this.setState((prev) => ({
      // posts: prev.posts.map((post, idx) => {
      //   if(id === idx) {
      //     return {
      //       text: post.text,
      //       clap: post.clap + 1
      //     }
      //   } 
      //   return post
      // })
      posts: store.getState()
    }))
    console.log(store.getState())
  }

  handleDelete(id) {
    store.dispatch(deletePost(id))
    this.setState((prev) => ({
      // posts: prev.posts.filter((post, idx) => {
      //   return id !== idx
      // })
      posts: store.getState()
    }))
    console.log(store.getState())
  }

  render() {
    const lists = this.state.posts.map((post, idx) => (
      <li key={idx}>
        {post.text} 
        {post.clap !== 0 ? 
          (<span>( {post.clap} claps )</span>) : (<span> no claps </span>)
        }
        <button type="button" onClick={this.handleClap.bind(this, idx)}>clap me</button>
        <button type="button" onClick={this.handleDelete.bind(this, idx)}>delete me</button>
      </li>
    ))
    return (
      <React.Fragment>
        <ul>
          {lists && lists}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this, this.state)}>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange.bind(this)} />
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}

export default Posts