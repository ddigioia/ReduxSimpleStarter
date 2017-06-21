import React, { Component } from 'react'

// Define a new class called SearchBar and give it the functionality of the React.Component class
class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.term} 
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    )
  }
}

export default SearchBar