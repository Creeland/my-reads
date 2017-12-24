import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import Shelves from './Shelves'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchPage}/>
        <Route exact path="/" component={Shelves} />
      </div>
    )
  }
}

export default BooksApp
