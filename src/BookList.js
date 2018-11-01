import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBooks: this.props.books
    };

    this.filterBooks = this.filterBooks.bind(this);
    this.filterBooksbyColor = this.filterBooksbyColor.bind(this);
    this.ifColorExists = this.ifColorExists.bind(this);
  }

  filterBooks(query) {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book => {
      return `${book.title}`.toLowerCase().includes(query);
    });
    this.setState({ filteredBooks });
  }
  filterBooksbyColor() {
    let color = this.props.match.params.bookColor;
    let filteredBooks = this.state.filteredBooks.filter(book => {
      return book.color === color;
    });
    return filteredBooks;
  }
  ifColorExists() {
    if (this.props.match.params.bookColor) {
      return <BookTable books={this.filterBooksbyColor()} />;
    } else {
      return <BookTable books={this.state.filteredBooks} />;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="books">
        <h3>Book</h3>
        <SearchBar changeHandler={this.filterBooks} />
        {this.ifColorExists()}
        <div className="row" />
      </div>
    );
  }
}

export default BookList;
