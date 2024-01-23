import { useEffect, useState } from 'react';

export const Tooltip = ({ children }: { children: React.ReactNode }) => {
  const [opened, setOpened] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    function handleClick() {
      console.log('hi');
      setFixed(false);
      setOpened(false);
    }

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [fixed]);

  return (
    <div className="relative border">
      <button
        className="ml-4 mt-4 rounded-md bg-blue-500 px-4 py-2"
        onMouseEnter={() => {
          setOpened(true);
        }}
        onMouseLeave={() => {
          setOpened(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          setFixed(true);
        }}
      >
        button
      </button>
      {(opened || fixed) && children}
    </div>
  );
};
