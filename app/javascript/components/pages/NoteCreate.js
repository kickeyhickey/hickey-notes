import React, { Component } from 'react'
import { FormGroup, Input, Label, Form, Button } from 'reactstrap';

export default class NoteCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newNote: {
                title: "",
                body: ""
            }
        }
    }

    handleChange = (e) => {
        const { newNote } = this.state
        newNote[e.target.name] = e.target.value
        this.setState({ newNote: newNote})
    }

    handleSubmit = () => {
        this.props.newNote(this.state.newNote)
    }


  render() {
    const {
        title,
        body
    } = this.state.newNote
    console.log(this.state.newNote);
    return (
      <>
      <Form>
        <FormGroup>
            <Label>Title</Label>
            <Input 
                type='text'
                name='title'
                onChange={this.handleChange}
                value={title}
            />
        </FormGroup>
        <FormGroup>
            <Label>Note</Label>
            <Input 
                type='text'
                name='body'
                onChange={this.handleChange}
                value={body}
            />
        </FormGroup>
      </Form>
      <Button
        onClick={this.handleSubmit}
        color='primary'
      >
        Submit
      </Button>
      </>
    )
  }
}
