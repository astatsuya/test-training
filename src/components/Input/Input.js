import React from 'react';
import Button from './button/button';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  };

  handleClick() {
    alert(this.state.name);
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <form>
        Input:{' '}
        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <Button handleClick={this.handleClick} />
      </form>
    );
  }
};

export default Input;
