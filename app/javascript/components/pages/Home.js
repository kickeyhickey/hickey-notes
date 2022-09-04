import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap';

class Home extends Component {
  render() {
    return(
      <>
      <h3>This is the Home Page</h3>
      {this.props.notesArray.map((note, id) => {
        return (
          <div key={id}>
              <Card
              style={{
                width: '35rem'
              }}
              >
                <NavLink to={`/noteshow/${note.id}`}>
                <CardBody>
                  <CardTitle tag="h5">
                  {note.title}
                  </CardTitle>
                   <CardText>
                   {note.body}
                   </CardText>
                </CardBody>
            </NavLink>
              </Card>
          </div>
          )
        })}
        <NavLink 
          to='/notecreate'>
        <Button
          color='success'
          >Create Note</Button>
        </NavLink>
        <NavLink
          color='success'
          to='tagindex'
          >
            All Tags
          </NavLink>
      </>
    )
  }
}

export default Home