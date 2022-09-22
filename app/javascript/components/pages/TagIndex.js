import React, { Component } from 'react'
import {
  NavLink,
  Redirect
} from 'react-router-dom'
import { Button } from 'reactstrap'

export default class TagIndex extends Component {
    constructor(props) {
      super(props)
      this.state = {
        submitted:false
      }
    }

  handleDelete = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this patient profile?"
      ) === true
    ) {
      this.props.deleteTag(id)
      this.setState({ submitted: true });
    }
  };



  render() {
    return (
      <>
      <h1>tagindex</h1>
      <div className='tagshow-container' >
      {this.props.tagsArray.map((tag, idx) => {
        return (
          <div>
          <NavLink
          key={idx}
          to={`/tagnoteindex/${tag.id}`} >
            <Button
              className='tag-button'
              color='info'
              >{tag.name}
              </Button>
              </NavLink>
              <Button
                color='danger'
                onClick={() => this.handleDelete(tag.id)}>
                  Delete Tag
                </Button>
              </div>
        )
      })} 
      {this.state.submitted && <Redirect to="/tagindex" /> }
      </div>
        </>
    )
  }
}
