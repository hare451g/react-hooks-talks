import React from 'react';

class Dracula extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNightAlready: false
    };
  }

  handleNightToggle = () => {
    this.setState(prevState => ({
      isNightAlready: !prevState.isNightAlready
    }));
  };

  render() {
    return (
      <>
        <h1>{this.state.isNightAlready ? '🧛‍♂️' : '🙍‍♂️'}</h1>
        <button onClick={this.handleNightToggle}>
          {this.state.isNightAlready ? 'set to day 🌞' : 'set to night 🌙'}
        </button>
      </>
    );
  }
}

export default Dracula;
