import React, { Component } from 'react'
import "./Note.css"

export default class Note extends Component {
  render() {
    return (
      <div class="note">
        <div class="note-title-row">
          <h3 class="note-title">{this.props.title}</h3>
          <i class='bx bx-x bx-md'></i>
        </div>
        <p className="note-content">{this.props.note}</p>
        <div className='note-date-div'>
          <p className="note-date">{this.props.date}</p>
        </div>
      </div>
    )
  }
}
