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


  handleChange = (e) => {
    const { newTag } = this.state;
    newTag[e.target.name] = e.target.value;
    this.setState({ newTag })
  }

  handleSubmit = () => {
    this.createTag(this.state.newTag)
    this.setState({
        newTag: {
            name:""
        }
    })
  }

  createTag = async (newTag) => {
    try {
        const response = await fetch(`/notes/${this.props.id}/tags`, {
            body: JSON.stringify(newTag),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        console.log("POST",response);
        if (response.status !==200 && response.status !== 304) {
            alert("there is something wrong with your patient submission.")
        return
        }
        this.props.fetchNoteById(this.props.id)
    } catch (error) {
        console.error(error);
    }
  }


  render() {
    const { name } = this.state.newTag
    console.log("NEWTAG", this.state.newTag.name);
    console.log("ID!!", this.props.id);
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
