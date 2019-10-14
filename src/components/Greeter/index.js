import React from 'react';

class Greeter extends React.Component {
  render() {
    return <h1>Hi {this.props.name || 'anon'}</h1>;
  }
}

export default Greeter;
