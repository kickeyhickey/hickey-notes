import React, { Component } from 'react'

export default class Tag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tagsArray:[]
        }
    }

    componentDidMount() {
        this.readTags(this.props.id)
      }
      
      readTags = async (id) => {
        console.log("ID",id);
        try {
          const response = await fetch(`/notes/${id}`)
          const note = await response.json()
          const tags = note.tags
          this.setState({ tagsArray: tags })
        } catch (error) {
          console.errors(error);
        }
      }

  render() {
    console.log("LOOK HERE!!!!!", this.props.id);
    return (
      <>
      {this.state.tagsArray.map(tag => {
        return (
            <div>
                <p>{tag.name}</p>
            </div>
        )
      })}
      </>
    )
  }
}
