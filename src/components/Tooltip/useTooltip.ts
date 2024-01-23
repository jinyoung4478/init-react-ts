import { useEffect, useState, useReducer } from 'react';

type TooltipState = {
  opened: boolean;
  fixed: boolean;
};

type TooltipAction =
  | {
      type: 'open';
    }
  | {
      type: 'close';
    }
  | {
      type: 'fix';
    }
  | {
      type: 'unfix';
    };

const tooltipReducer = ({ opened, fixed }: TooltipState, action: TooltipAction) => {
  switch (action.type) {
    case 'open':
      return { opened: true, fixed };
    case 'close':
      return { opened: false, fixed };
    case 'fix':
      return { opened, fixed: true };
    case 'unfix':
      return { opened, fixed: false };
  }
};

export const useTooltip = () => {
  const [{ opened, fixed }, dispatch] = useReducer(tooltipReducer, {
    opened: false,
    fixed: false,
  });

  useEffect(() => {
    function handleClick() {
      dispatch({ type: 'unfix' });
    }

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [fixed]);

  return {
    isOpened: opened || fixed,
    handleEnter() {
      dispatch({ type: 'open' });
    },
    handleLeave() {
      dispatch({ type: 'close' });
    },
    handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      event.stopPropagation();
      dispatch({ type: 'fix' });
    },
  };
};
