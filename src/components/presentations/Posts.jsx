import React, { Component } from 'react'

export class Posts extends Component {
  
  state = {
    text: ""
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = ({text}, e) => {
    e.preventDefault()
    this.props.addPost(text)
    this.setState({
      text: ''
    })
  }

  handleClap = (id) => {
    this.props.clapPost(id)
  }

  handleDelete = (id) => {
    this.props.deletePost(id)
  }

  render() {
    const lists = this.props.todos.map((list, idx) => (
      <li key={idx}>
        {list.text} 
        {list.clap !== 0 ? 
          (<span>( {list.clap} claps )</span>) : (<span> no claps </span>)
        }
        <button type="button" onClick={this.handleClap.bind(this, idx)}>clap me</button>
        <button type="button" onClick={this.handleDelete.bind(this, idx)}>delete me</button>
      </li>
    ))
    return (
      <div>
        {lists && (
          <ul>
            {lists}
          </ul>
        )}
        <form onSubmit={this.handleSubmit.bind(this, this.state)}>
          <input type="text" name="text" onChange={this.handleChange.bind(this)} value={this.state.text}/>
          <button type="submit">Add Post</button>
        </form>
      </div>
    )
  }
}

export default Posts
