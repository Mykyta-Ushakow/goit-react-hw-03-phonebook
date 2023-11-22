import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  onType = e => {
    const field = e.target.name;
    const value = e.target.value;

    this.setState({ [field]: value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name || ''}
          onChange={this.onType}
          required
        />

        <label>Number</label>
        <input
          type="tel"
          name="number"
          required
          onChange={this.onType}
          value={this.state.number || ''}
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
