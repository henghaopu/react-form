import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    alert(
      `A name and email set was submitted: ${this.state.name} ${this.state.email}`
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ margin: '1rem' }}>
          <label style={{ marginRight: '1rem' }} htmlFor='name'>
            Name
          </label>
          <input
            id='name'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ margin: '1rem' }}>
          <label style={{ marginRight: '1rem' }} htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ margin: '1rem' }}>
          <input type='submit' value='Submit' />
        </div>
      </form>
    );
  }
}

export default NameForm;
