import { useTooltip } from './useTooltip';

export const Tooltip = ({ children }: { children: React.ReactNode }) => {
  const { isOpened, handleEnter, handleLeave, handleClick } = useTooltip();

  return (
    <div className="relative border">
      <button
        className="ml-4 mt-4 rounded-md bg-blue-500 px-4 py-2"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        Hover of Click
      </button>
      {isOpened && children}
    </div>
  );
};
