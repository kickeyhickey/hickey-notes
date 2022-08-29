import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './pages/Home'
import NoteCreate from './pages/NoteCreate'
import NoteShow from './pages/NoteShow'
import NoteUpdate from './pages/NoteUpdate'
import Tag from './pages/Tag'

class App extends Component {
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
    console.log(this.state.notesArray);
    return(
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/"
            render={() => (
              <Home
              notesArray={this.state.notesArray} />
           )}
          />
          <Route path="/noteshow/:id"
            render={(props) => {
              const id = props.match.params.id
              const note = this.state.notesArray.find(note => note.id === +id)
              return (
                <NoteShow note={note} id={id} deleteNote={this.deleteNote} />
              )
            }}
          />
            <Route path="/noteupdate/:id"
            render={(props) => {
              const id = props.match.params.id
              const note = this.state.notesArray.find(note => note.id === +id)
              return (
                <NoteUpdate note={note} id={id} updateNote={this.updateNote} />
              )
            }}
          />
           <Route path="/notecreate"
            render={() => (
              <NoteCreate
              newNote={this.newNote} />
           )}
          />
          <Route path="/tag" component={Tag} />
        </Switch>
      </Router>
    </>
    )
  }
}

export default App