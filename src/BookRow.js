import React, { Component } from "react";
import { Link } from "react-router-dom";
class BookRow extends Component {
  render() {
    const book = this.props.book;
    return (
      <tr>
        <td>{book.title}</td>
        <td>
          {book.authors.map(author => (
            <Link key={author.name} to={`/authors/${author.id}`}>
              {author.name}
            </Link>
          ))}
        </td>
        <td>
          <Link
            className="btn"
            style={{ backgroundColor: book.color }}
            to={`/books/${book.color}`}
          />
        </td>
      </tr>
    );
  }
}

export default BookRow;
