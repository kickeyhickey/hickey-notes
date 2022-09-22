import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FormGroup, Input, Label, Form, Button } from "reactstrap";
import TagCreate from "./TagCreate";

export default class NoteCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote: {
        title: "",
        body: "",
        tags: "",
      },
      submitted: false,
    };
  }

  handleNoteChange = (e) => {
    const { newNote } = this.state;
    newNote[e.target.name] = e.target.value;
    this.setState({ newNote: newNote });
  };

  // handleTagChange = (e) => {
  //   const { name } = this.state.newNote.tags;
  //   name[e.target.name] = e.target.value;
  //   this.setState({ ...newNote.tags });
  // };

  handleSubmit = () => {
    this.props.newNote(this.state.newNote);
    this.setState({ submitted: true });
  };

  render() {
    const { title, body, tags } = this.state.newNote;
    console.log("NEWNOTE", this.state.newNote);
    // console.log("NEWTAG",this.state.tagName);
    return (
      <>
        <Form>
          <FormGroup>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              onChange={this.handleNoteChange}
              value={title}
            />
          </FormGroup>
          <FormGroup>
            <Label>Note</Label>
            <Input
              type="text"
              name="body"
              onChange={this.handleNoteChange}
              value={body}
            />
          </FormGroup>
          <FormGroup>
            <Label>tag</Label>
            <Input
              type="text"
              name="tags"
              onChange={this.handleNoteChange}
              value={tags}
            />
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit} color="primary">
          Submit
        </Button>
        {this.state.submitted && <Redirect to="/" />}
      </>
    );
  }
}
