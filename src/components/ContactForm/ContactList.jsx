import { Component } from 'react';
import { Contact } from './Contact';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.initialValues.length !== 0 ? (
          this.props.initialValues.map(contact => (
            <Contact
              name={contact.name}
              number={contact.number}
              key={contact.id}
              handleDelete={this.props.handleDelete}
            />
          ))
        ) : (
          <p>No contacts saved</p>
        )}
      </ul>
    );
  }
}
