import React, { Component } from 'react'
import Book from "./Book"
import * as BooksAPI from './BooksAPI'

export default class Shelves extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books =>  this.setState({ books }))
  }

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.state.books.filter(book => book.shelf === "currentlyReading").map(book => (
                      <Book book={book}/>
                    ))
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want To Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.state.books.filter(book => book.shelf === "wantToRead").map(book => (
                      <Book book={book}/>
                    ))
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.state.books.filter(book => book.shelf === "read").map(book => (
                      <Book book={book}/>
                    ))
                  }
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}