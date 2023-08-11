import React, { Component } from 'react'
import "./Notes.css"
import SearchBar from './SearchBar'
import Note from './Note'

export default class Notes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {id: 1, date: "3rd August 2023", title: "First Job", note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed diam id felis rhoncus laoreet sit amet faucibus risus. Ut fermentum molestie lobortis. Aenean porttitor quis tellus quis finibus."},
        {id: 2, date: "3rd August 2023", title: "Second Job", note: "Interdum et malesuada fames ac ante ipsum primis in faucibus."},
        {id: 2, date: "3rd August 2023", title: "A job", note: "Curabitur vitae porttitor leo, et consectetur mauris. Fusce semper risus ante, a porta velit ullamcorper quis. Praesent efficitur tempus erat, nec interdum nisl ultrices ac."},
        {id: 2, date: "3rd August 2023", title: "Another job", note: "Proin semper tincidunt augue, at vulputate lorem semper a. In tincidunt auctor enim, et euismod velit finibus at."}
      ]
    }
  }
    
  render() {
    const noteDisplay = this.state.notes.map(note => (
      <Note key={note.id} title={note.title} note={note.note} date={note.date} />
    ))

    return (
      <div className="container">
        <SearchBar />
        <div className='notes-container'>
          {noteDisplay}
        </div>
      </div>
    )
  }
}
