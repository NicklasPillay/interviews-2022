import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span>{this.formatCount()}</span>
        <button>Increment</button>
        <ul>
          {this.state.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state; // this is object destructing
    return count === 0 ? "Zero" : count;
  }
}
