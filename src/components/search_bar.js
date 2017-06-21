import React, { Component } from 'react'

// Define a new class called SearchBar and give it the functionality of the React.Component class
class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
      <div className='search-bar'>
        <input 
          value={this.state.term} 
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar