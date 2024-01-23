import { useEffect, useState } from 'react';

export const useTooltip = () => {
  const [opened, setOpened] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    function handleClick() {
      setFixed(false);
      setOpened(false);
    }

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [fixed]);

  return {
    isOpened: opened || fixed,
    handleEnter() {
      setOpened(true);
    },
    handleLeave() {
      setOpened(false);
    },
    handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      event.stopPropagation();
      setFixed(true);
    },
  };
};
