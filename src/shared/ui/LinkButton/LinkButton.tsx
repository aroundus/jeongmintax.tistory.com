import type { ComponentProps } from 'react';

import classNames from 'classnames';

export type LinkButtonSize = 'lg' | 'sm';
export type LinkButtonVariant = 'contained' | 'outlined';

export interface LinkButtonProps extends ComponentProps<'a'> {
  size?: LinkButtonSize;
  variant?: LinkButtonVariant;
}

export const LinkButton = ({ className, size = 'lg', variant = 'contained', ...props }: LinkButtonProps) => {
  return (
    <a
      className={classNames(
        'inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-colors',
        {
          'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'contained',
          'border bg-background/10 shadow-xs hover:bg-accent hover:text-accent-foreground': variant === 'outlined',
        },
        {
          'h-12 rounded-lg px-8 text-lg': size === 'lg',
          'h-8 gap-1.5 px-3 text-sm': size === 'sm',
        },
        className,
      )}
      {...props}
    />
  );
};
