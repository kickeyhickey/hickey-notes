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

//   componentDidMount() {
//     this.fetchTagById(this.props.id)
// }

// fetchTagById = async (id) => {
//     try {
//         const response = await fetch(`/notes/${id}/tags`)
//         const tag = await response.json()
//         this.setState({ tag: tag })
//     } catch (error) {
//         console.error(error);
//     }
// }

  render() {
    // console.log("THIS",this.state.tag.name);
    console.log("tag",this.props.tag);
    // console.log(this.state.tag);
    return (
      <>
      <h1>tagnote</h1>
      <div>{this.props.tag.name}</div>
        {this.props.tag.notes.map((note, id) => {
          return (
            <div key={id}>
            <p>{note.title}</p>
            <p>{note.body}</p>
            </div>
          )
        })}
      </>
    )
  }
}
