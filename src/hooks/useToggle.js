import { useState } from 'react';

function useToggle(initialValue) {
  const [isOpen, setOpen] = useState(initialValue || false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return [isOpen, toggle];
}

export default useToggle;
