import React from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentWillReceiveProps(newProps){
    console.log("newProps:" + JSON.stringify(newProps));
    this.setState({
      show: newProps.name === "Davide"
    });
  }

  componentWillMount(){
    console.log("Will mount...");
  }

  componentDidMount(){
   console.log("Did mount!"); 
  }

  render() {
    var style = {
      display: this.state.show ? "block" : "none"
    }
    return (
      <div>
        <div>Hello <span style={{color:"red"}}>{this.props.name}</span>!</div>
        <div style={style}>Thanks all!</div>
      </div>
    );
  }
}
