import React, { Component } from 'react'
import App from '../App'

export default class NoteFetchCalls extends Component {
    constructor(props) {
        super(props)
        this.state = {
          notesArray: []
        }
      }
    
      componentDidMount() {
        this.readNotes()
      }
      
      readNotes = async () => {
        try {
          const response = await fetch("/notes")
          const notes = await response.json()
          this.setState({ notesArray: notes })
        } catch (error) {
          console.errors(error);
        }
      }
    
      newNote = async (newNote) => {
        try {
          const response = await fetch("/notes", {
            body: JSON.stringify(newNote),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
          if (response.status !== 200 && response.status !== 304) {
            alert("There is something wrong with your patient submssion.");
            return;
          }
          this.readNotes();
        } catch (error) {
          console.error(error);
        }
      };
    
      updateNote = async (note, id) => {
        try {
          const response = await fetch(`/notes/${id}`, {
            body: JSON.stringify(note),
            headers: {
              "Content-Type": "application/json",
            },
            method: "PATCH",
          });
          if (response.status !== 200 && response.status !== 304) {
            alert("There is something wrong with your note submssion.");
            return;
          }
          this.readNotes();
        } catch (error) {
          console.error(error);
        }
      };
    
    
    
      deleteNote = async (id) => {
        try {
          const response = await fetch(`/notes/${id}`, {
            method: "DELETE",
          });
          if (response.status !== 200 && response.status !== 304) {
            alert("There is something wrong with your note submssion.");
            return;
          }
          this.readNotes();
        } catch (error) {
          console.error(error);
        }
      };
    
  render() {
    return (
        <>
      <div>noteFetchCalls</div>
        </>
    )
  }
}
