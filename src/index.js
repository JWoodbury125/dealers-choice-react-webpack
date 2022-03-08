import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

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
      <div>
        <div> {this.state.books}</div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
