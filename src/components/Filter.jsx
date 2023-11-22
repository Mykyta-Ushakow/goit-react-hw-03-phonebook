import { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <div>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          onChange={this.props.handleSearch}
          placeholder={'Enter name'}
        />
      </div>
    );
  }
}
