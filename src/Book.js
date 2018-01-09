import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

export default class Book extends Component {
  updateBook(e) {
    BooksAPI.update(this.props.book, e.target.value).then(() => this.props.getBooks())
  }

  render() {
    const { book } = this.props
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(e) => this.updateBook(e)} value={book.shelf ? book.shelf : "none"}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors.join(", ")}</div>
        </div>
      </li>
    )
  }
}