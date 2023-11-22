import { Component } from 'react';
import { AppDiv } from './App.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactForm/ContactList';
import { Filter } from './Filter';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = ({ name, number }) => {
    if (
      this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      ).length !== 0
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prev => {
      return {
        contacts: [...prev.contacts, { name, number, id: nanoid() }],
      };
    });
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
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

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
