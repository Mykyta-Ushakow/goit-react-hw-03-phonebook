import { Component } from 'react';

export class Contact extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <p>{this.props.name}: </p>
        <p>{this.props.number}</p>
        <button onClick={this.props.handleDelete}>Delete</button>
      </li>
    );
  }
}
