import React from 'react';
import HelloSurprise from './HelloSurprise'

export default class HelloComponentExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Valentina'
    };
  }

  handleChange(e){
    this.setState({name:e.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" onChange={e => this.handleChange(e)} />
        <HelloSurprise name={this.state.name} />
      </div>
    );
  }
}
