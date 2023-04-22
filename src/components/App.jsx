import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onInputName = event => {
    this.setState({ name: event.currentTarget.value });
  };

  onAddContact = name => {};

  render() {
    return (
      <div>
        <Contacts
          contacts={this.state.contacts}
          name={this.state.name}
          onInputName={this.onInputName}
        />
      </div>
    );
  }
}
