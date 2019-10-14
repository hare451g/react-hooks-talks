import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      isSubmitting: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ isSubmitting: true });

    // mock request
    setTimeout(() => {
      this.setState({
        isSubmitting: false
      });
    }, 5000);
  };

  render() {
    return (
      <form>
        <div className="form-field">
          <label for="username">Username</label>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            disabled={this.state.isSubmitting}
          />
        </div>

        <div className="form-field">
          <label for="password">Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            disabled={this.state.isSubmitting}
          />
        </div>

        <button
          onClick={this.onSubmit}
          type="submit"
          disabled={this.state.isSubmitting}
        >
          {this.state.isSubmitting ? 'Logging in . . . ' : 'Login'}
        </button>
      </form>
    );
  }
}

export default LoginForm;
