import React, { useState } from 'react';

function LoginForm(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);

    // mock request
    setTimeout(() => {
      setIsSubmitting(false);
    }, 5000);
  };

  return (
    <form>
      <div className="form-field">
        <label for="username">Username</label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <div className="form-field">
        <label for="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <button onClick={onSubmit} type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in . . . ' : 'Login'}
      </button>
    </form>
  );
}

export default LoginForm;
