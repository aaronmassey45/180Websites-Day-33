import React, { Component } from 'react';

export default class Entry extends Component {
  render() {
    let props = this.props;
    return (
      <div className="Entry col-sm-6 jumbotron">
        <h2><a href={props.url} target="_blank">{props.title}</a></h2>
        <p>{props.content}</p>
      </div>
    );
  }
}
