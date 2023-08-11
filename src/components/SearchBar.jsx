import React, { Component } from 'react'
import "./SearchBar.css"

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
       search: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      search: event.target.data
    })
  }

  render() {
    const { handleChange, search } = this.state;
    return (
      <div className="search-container">
        <form action="submit">
          <input 
            className="search-input" 
            type="text"
            name="search"
            value={search}
            placeholder="wash the car..."
            onChange={handleChange} />
            <button className="search-button">
              <i className='bx bx-search bx'></i>
            </button>
        </form>
      </div>
    )
  }
}
