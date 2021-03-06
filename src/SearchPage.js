import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

export default class SearchPage extends Component {
  state = {
    query: '',
    results: []
  }

  updateQuery(query) {
      BooksAPI.search(query.trim()).then(books => this.setState({ results: books }))
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input onChange={(e) => this.updateQuery(e.target.value)} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                this.state.results &&
                  this.state.results.map(book => (
                    <Book getBooks={() => this.props.getBooks()} key={book.id} book={book}/>
                  ))
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
