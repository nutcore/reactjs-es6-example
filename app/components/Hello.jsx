import React from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    console.log("Will mount...");
  }

  componentDidMount(){
   console.log("Did mount!"); 
  }

  render() {
    return (
        <div>Hello <span style={{color:"red"}}>{this.props.name}</span>!</div>
    );
  }
}
