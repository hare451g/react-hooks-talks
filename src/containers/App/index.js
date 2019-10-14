import React from 'react';

import Greeter from '../../components/Greeter';

function App(props) {
  return (
    <>
      <Greeter />
      <Greeter name="hendra" />
    </>
  );
}

export default App;
