import { Component } from 'react';
import { AppDiv } from './App.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactForm/ContactList';
import { Filter } from './Filter';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];

    savedContacts.length && this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = ({ name, number }) => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { name, number, id: nanoid() };
    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
  };

  handleSearch = e => {
    const searchName = e.target.value;
    this.setState({ filter: searchName });
  };

  handleDelete = e => {
    const nameToDelete = e.target.parentNode.firstChild.textContent.slice(
      0,
      -2
    );
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(({ name }) => name !== nameToDelete);

      return {
        contacts: newContacts,
      };
    });
  };

  render() {
    const filteredContacts = this.state.contacts.length
      ? this.state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : [];

    return (
      <AppDiv className="main">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts:</h2>
        <Filter handleSearch={this.handleSearch} />
        <ContactList
          initialValues={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </AppDiv>
    );
  }
}
