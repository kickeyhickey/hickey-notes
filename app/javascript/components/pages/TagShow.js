import React, { Component } from 'react'
import { Button } from 'reactstrap';
import './TagShow.css'

export default class TagShow extends Component {


  render() {
    return (
        <div className='tagshow-container' >
          {this.props.tags.map(tag => {
            return (
                    <Button
                    className='tag-button'
                      color='info'
                      >{tag.name}
                    </Button>
            )
          })}
      </div>
      
    )
  }
}
