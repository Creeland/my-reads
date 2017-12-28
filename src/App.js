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

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchPage}/>
        <Route exact path="/" render={() => (
            <Shelves books={this.state.books}/>
          )} 
        />
      </div>
    )
  }
}

export default BooksApp
