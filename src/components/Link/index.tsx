import { forwardRef } from 'react';
import { useHref, useLinkClickHandler } from 'react-router-dom';

type Props = {
  onClick?: () => void;
  target?: React.HTMLAttributeAnchorTarget;
  replace?: boolean;
  state?: any;
  to: string;
  label: string;
};

export const Link = forwardRef(
  (
    { onClick, replace = false, state, target, to, label, ...rest }: Props,
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    let href = useHref(to);
    let handleClick = useLinkClickHandler(to, {
      replace,
      state,
      target,
    });
    return (
      <a
        href={href}
        {...rest}
        onClick={(event) => {
          if (!event.defaultPrevented) {
            handleClick(event);
          }
        }}
        ref={ref}
        target={target}
      >
        {label}
      </a>
    );
  }
);
