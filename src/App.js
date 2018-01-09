import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import Shelves from './Shelves'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
            <SearchPage getBooks={() => this.getBooks()}/>
          )}
        />
        <Route exact path="/" render={() => (
            <Shelves getBooks={() => this.getBooks()} books={this.state.books}/>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
