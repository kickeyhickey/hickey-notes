import React, { Component } from 'react'

export default class TagNoteIndex extends Component {
    constructor(props) {
      super(props) 
        this.state = {
          tag: {
            name:"",
            notes: []
          }
        }
    }

  componentDidMount() {
    this.fetchNtagById(this.props.id)
}

fetchNtagById = async (id) => {
    try {
        const response = await fetch(`/tags/${id}`)
        const tag = await response.json()
        this.setState({ tag: tag })
    } catch (error) {
        console.error(error);
    }
}
  render() {
    return (
      <>
      <div>TagNoteIndex</div>
        <p>{this.state.tag.name}</p>
        {this.state.tag.notes.map((note, id) => {
          return (
            <div>
            <p>{note.title}</p>
            <p>{note.body}</p>
            </div>
          )
        })}
      </>
    )
  }
}
