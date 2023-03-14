import { Component } from 'react';
import Form from './Form';
import { ListItem } from './ListItem';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  createUser = data => {
    const newUser = {
      ...data,
    };
    this.state.contacts.push(newUser);

    console.log(newUser);
    console.log(this.state.contacts);

  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form createUser={this.createUser}></Form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.length > 0 && (
            <ListItem contacts={this.state.contacts}></ListItem>
          )}
        </ul>
      </>
    );
  }
}

export default App;
