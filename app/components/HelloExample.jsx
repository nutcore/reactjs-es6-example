import React from 'react';

export default class HelloExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '??? '
    };
  }

  handleChange(e){
    this.setState({ name:e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={e => this.handleChange(e)} />
        <div>Hello {this.state.name}!</div>
      </div>
    );
  }
}
