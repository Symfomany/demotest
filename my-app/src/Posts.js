import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res =>
      this.setState({
        posts: res.data
      })
    );
  }

  render() {
    return <ul>{this.state.posts.map(elt => <li>{elt.title}</li>)}</ul>;
  }
}

export default Posts;
