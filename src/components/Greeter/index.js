import React from 'react';

function Greeter(props) {
  return <h1>Hi {props.name || 'anon'}</h1>;
}

export default Greeter;
