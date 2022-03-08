import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { response } from "express";
import url from "url";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      books: "",
    };
  }
  async componentDidMount() {
    const repsponse = await axios.get("/books");
    console.log(response);
    // this.setState({ books: response.data });
  }

  render() {
    return (
      <div>
        <p> </p>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
