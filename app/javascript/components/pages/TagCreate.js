import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { FormGroup, Label, Form, Input, Button } from 'reactstrap'

export default class TagCreate extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            newTag: {
              name:""
            },
            submitted: false,
          }
        }

        updateTag = async (tag, note_id) => {
          console.log("updateTag",tag, note_id);
          try {
            const response = await fetch(`/notes/${note_id}`, {
              body: JSON.stringify(tag),
              headers: {
                "Content-Type": "application/json",
              },
              method: "PATCH",
            });
            if (response.status !== 200 && response.status !== 304) {
              alert("There is something wrong with your note submssion.");
              return;
            }
          } catch (error) {
            console.error(error);
          }
        };


  handleChange = (e) => {
    const { newTag } = this.state;
    newTag[e.target.name] = e.target.value;
    this.setState({ newTag })
  }

  handleSubmit = () => {
    console.log(this.updateTag("HELLO"));
    // this.props.updateTag(this.state.newTag, this.props.note_id)
  }




  render() {
    const { name } = this.state.newTag
    return (
      <Form>
        <FormGroup>
            <Label>Tag Name</Label>
            <Input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
            />
        </FormGroup>
        <Button
            color='primary'
            onClick={this.handleSubmit}
            >Add Tag
            </Button>
        {/* {this.state.submitted && (
            <Redirect to={`/noteshow/${this.props.id}`} />
        )} */}
      </Form>
    )
  }
}
