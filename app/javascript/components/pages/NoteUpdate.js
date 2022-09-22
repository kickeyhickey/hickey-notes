import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export default class NoteUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateNote: {
        title: this.props.note.title,
        body: this.props.note.body,
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    const { updateNote } = this.state
    updateNote[e.target.name] = e.target.value
    this.setState({ updateNote: updateNote})
}

handleSubmit = () => {
    this.props.updateNote(this.state.updateNote, this.props.note.id)
    this.setState({ submitted: true })
}

  render() {
    const { title, body } = this.state.updateNote
    console.log(this.state.updateNote);
    return (
      <>
        {/* <Form>
          <FormGroup>
            <Label>Title</Label>
            <Input
              type='text'
              name='title'
              onChange={this.handleChange}
              value={title}
            />
            
          </FormGroup>
          <br />
          <FormGroup>
            <Label>NOTE</Label>
            <Input
              type='text'
              name='body'
              onChange={this.handleChange}
              value={body}
            />
          </FormGroup>
          <Button
          color='success'
          onClick={this.handleSubmit} >
            Update
          </Button>
        </Form> */}
      {/* { this.state.submitted && <Redirect to={`/noteshow/${this.props.note.id}`} /> } */}
      </>
    )
  }
}
