import React, { Component } from 'react'

export default class NoteShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: {
            title: "",
            body: ""
            }
        }
    }

    componentDidMount() {
        this.fetchNoteById(this.props.id)
    }

    fetchNoteById = async (id) => {
        try {
            const response = await fetch(`/notes/${id}`)
            const note = await response.json()
            this.setState({ note })
        } catch (error) {
            console.error(error);
        }
    }

  render() {
    console.log("SHOW", this.props.id);
    const {
        title,
        body
    } = this.state.note
    return (
      <>
        <h2>
            <strong>{title}</strong>
        </h2>
        <p>{body}</p>
      </>
    )
  }
}
