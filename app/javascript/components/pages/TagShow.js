import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import TagCreate from './TagCreate';
import TagNoteIndex from './TagNoteIndex';
import './TagShow.css'

export default class TagShow extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

 

  render() {
    console.log(this.props.tags);
    return (
      <>
        <div className='tagshow-container' >
          {this.props.tags.map((tag, id) => {
            return (
              <NavLink 
                    key={id}
                    to={`/tagnoteindex/${tag.id}`} >
                    <Button
                    className='tag-button'
                    color='info'
                    >{tag.name}
                    </Button>
                  </NavLink>
            )
          })}
      </div>
    </>
    )
  }
}
