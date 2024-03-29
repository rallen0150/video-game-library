import React, { Component } from 'react'
import axios from 'axios'

import SuggestionsSmall from './SuggestionSmall';

// const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class SearchSmall extends Component {
  state = {
    error: false,
    query: '',
    api_cat: 'games',
    results: []
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {api_cat: 'games'};

  //   // this.handleChange = this.handleChange.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      api_cat: event.target.value
    });
  }

  getInfo = () => {
    //   console.log(this.state.query);
    axios.get(`https://rawg.io/api/${this.state.api_cat}?search=${this.state.query}&key=${process.env.REACT_APP_RAWG_KEY}`)
      .then(({ data }) => {
        //   console.log(data.results);
        this.setState({
          results: data.results
        })
      })
      .catch(() => this.setState({ error: true }))
  }

  // handleClick(event) {
  //     console.log("ROBBIE")
  //     console.log(event);
  //     console.log(this);
  //   //   selectGame();
  // }

  handleInputChange = () => {
    this.setState({
      query: encodeURI(this.search.value)
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        // this.showDropdown()
        if (this.state.query.length >= 3) {
        //   console.log(this.state);
          this.getInfo()
        //   console.log(this.state.results);
        }
      } else if (!this.state.query) {
        // this.hideDropdown()
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search Games"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          className="search-games-sm"
          size="40"
        />
        <SuggestionsSmall results={this.state.results} category={this.state.api_cat} />
      </form>
    )
  }
}

export default SearchSmall