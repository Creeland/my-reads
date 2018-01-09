import React, { Component } from 'react'
import Book from "./Book"
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.books.filter(book => book.shelf === this.props.type).map(book => (
                <Book getBooks={() => this.props.getBooks()} key={book.id} book={book}/>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default class Shelves extends Component {
  state = {
    shelves: [
      {
        title: "Currently Reading",
        type: "currentlyReading"
      },
      {
        title: "Want to Read",
        type: "wantToRead"
      },
      {
        title: "Reading",
        type: "read"
      },
    ]
  }

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.shelves.map(shelf => (
              <Shelf
                key={shelf.type}
                title={shelf.title}
                type={shelf.type}
                books={this.props.books}
                getBooks={() => this.props.getBooks()}
              />
            ))}

          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add Book</Link>
        </div>
      </div>
    )
  }
}