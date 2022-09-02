import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Tag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tagsArray:[]
        }
    }

    componentDidMount() {
        this.readTags()
      }
      
      readTags = async () => {
        try {
          const response = await fetch(`/tags`)
          const tags = await response.json()
          this.setState({ tagsArray: tags })
        } catch (error) {
          console.errors(error);
        }
      }

  render() {
    return (
      <>
      {this.state.tagsArray.map(tag => {
        return (
          <div className='container'>
              <p>{tag.name}</p>
          </div>
        )
      })}
      </>
    )
  }
}
