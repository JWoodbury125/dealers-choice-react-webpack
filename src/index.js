import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Book = (props) => {
  const books = props.book;
  return <ul> {books.name} </ul>;
};
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      books: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get("/books");
    this.setState({ books: response.data });
    console.log(this.state.books);
  }

  render() {
    return (
      <ul>
        {this.state.books.map((book) => {
          return <Book key={book.id} book={book} />;
        })}
      </ul>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
