import React, { useState } from 'react';

import useHandleChange from '../../hooks/useHandleChange';

function LoginForm(props) {
  const [username, setUsername] = useHandleChange(null);
  const [password, setPassword] = useHandleChange(null);

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
          onChange={setUsername}
          disabled={isSubmitting}
        />
      </div>

      <div className="form-field">
        <label for="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={setPassword}
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
