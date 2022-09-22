import React, { Component } from 'react'
import { Redirect, NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import TagShow from './TagShow'
import './NoteShow.css'
import TagCreate from './TagCreate'
import TagNoteIndex from './TagNoteIndex'
export default class NoteShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: {
            title: "",
            body: "",
            tags: []
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
    const {
        title,
        body
    } = this.state.note


    return (
      <div className='noteshow-container'>
        <h2>
            <strong>{title}</strong>
        </h2>
        <p>{body}</p>
        <div className='noteshow-buttons'>
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
          </div>
        <div className='note-tagshow-container'>
         <TagShow tags={this.state.note.tags} note_id={this.props.id} newTag={this.props.newTag}/> 
         <TagCreate note_id={this.props.id} />

        </div>
        {this.state.submitted && <Redirect to={'/'} /> }
      </div>
    )
  }
}
