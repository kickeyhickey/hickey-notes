import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';

class Home extends Component {
  render() {
    console.log("HERE",this.props.notesArray);
    return(
      <>
      <h3>This is the Home Page</h3>
      {this.props.notesArray.map((note, id) => {
        return (
          <div key={id}>
            <NavLink to={`/noteshow/${note.id}`}>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
            </NavLink>
          </div>
          )
        })}
        <NavLink 
          to='/notecreate'>
        <Button
          color='success'
          >Create Note</Button>
        </NavLink>
        {/* <NoteCreate 
          noteCreate={this.props.noteCreate}
        /> */}
      </>
    )
  }
}

export default Home