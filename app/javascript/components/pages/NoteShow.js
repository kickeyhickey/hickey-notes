import React, { Component } from 'react'
import { Redirect, NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

export default class NoteShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: {
            title: "",
            body: ""
            },
            submitted: false,
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

    handleDelete = () => {
        if (
          window.confirm(
            "Are you sure you want to delete this patient profile?"
          ) === true
        ) {
          this.props.deleteNote(this.props.id)
          this.setState({ submitted: true });
        }
      };
    

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
        <NavLink
          to={`/noteupdate/${this.props.id}`} >
          <Button
          color='warning'
          >
              EDIT
          </Button>
        </NavLink>
        <Button
        color='danger'
        onClick={this.handleDelete}>
            Delete
        </Button>
        {this.state.submitted && <Redirect to={'/'} /> }
      </>
    )
  }
}
