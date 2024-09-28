import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { animations } from '@stylexjs/open-props/lib/animations.stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';

import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { size } from '@/styles/size.stylex';

type Color = 'primary' | 'secondary';

type Size = 'sm' | 'md' | 'lg';

type Variant = 'contained' | 'outlined' | 'text';

type HTMLElementProps =
  | ({
      href: string;
    } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({
      href?: never;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>);

type ButtonProps = HTMLElementProps & {
  color?: Color;
  isFullWidth?: boolean;
  isLoading?: boolean;
  size?: Size;
  stylexStyles?: stylex.StyleXStyles;
  variant?: Variant;
};

export function Button({
  children,
  color: colorProp = 'primary',
  isFullWidth,
  isLoading,
  size = 'md',
  stylexStyles,
  variant = 'contained',
  ...props
}: ButtonProps) {
  const styleXProps = stylex.props(
    styles.button,
    isFullWidth && styles.isFullWidth,
    styles[size],
    styles[variant](colorProp),
    size === 'sm' && mixinStyles.font(14, 500),
    size === 'md' && mixinStyles.font(16, 700),
    size === 'lg' && mixinStyles.font(18, 700),
    stylexStyles,
  );

  const Children = () => (
    <>
      {isLoading ? (
        <em
          {...stylex.props(loaderStyles.loader, loaderStyles[colorProp], loaderStyles[size])}
          aria-label="로딩 중"
        />
      ) : (
        children
      )}
    </>
  );

  return props.href ? (
    <a
      {...styleXProps}
      {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      <Children />
    </a>
  ) : (
    <button
      {...styleXProps}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <Children />
    </button>
  );
}

const styles = stylex.create({
  button: {
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: shadows.shadow2,
    cursor: {
      default: 'pointer',
      ':disabled': 'no-drop',
    },
    display: 'flex',
    filter: {
      default: 'brightness(120%)',
      ':active:not(:disabled)': 'brightness(140%)',
      ':disabled': 'contrast(50%)',
      ':hover': {
        '@media (hover: hover)': 'brightness(100%)',
      },
    },
    gap: size[8],
    justifyContent: 'center',
    position: 'relative',
    transitionDuration: '300ms',
  },
  isFullWidth: {
    width: '100%',
  },

  // Size
  sm: {
    borderRadius: size[8],
    minWidth: size[60],
    padding: `${size[2]} ${size[12]}`,
  },
  md: {
    borderRadius: size[8],
    minWidth: size[120],
    padding: `${size[8]} ${size[16]}`,
  },
  lg: {
    borderRadius: size[12],
    minWidth: size[140],
    padding: `${size[12]} ${size[24]}`,
  },

  // Variant
  contained: (colorProp: Color) => ({
    backgroundColor: color[colorProp],
    borderColor: color[colorProp],
    color: color.black,
  }),
  outlined: (colorProp: Color) => ({
    borderColor: color[colorProp],
    color: 'CanvasText',
  }),
  text: (colorProp: Color) => ({
    borderWidth: 0,
    color: {
      default: 'CanvasText',
      ':hover': color[colorProp],
    },
  }),

  icon: {
    height: size[32],
    width: size[32],
  },
});

const loaderStyles = stylex.create({
  loader: {
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationName: animations.spin,
    animationTimingFunction: 'linear',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: size[4],
    display: 'block',
    margin: 'auto',
  },

  // Color
  primary: {
    borderColor: color.gray,
    borderTopColor: 'white',
  },
  secondary: {
    borderColor: 'white',
    borderTopColor: color.gray,
  },

  // Size
  sm: {
    height: size[16],
    width: size[16],
  },
  md: {
    height: size[20],
    width: size[20],
  },
  lg: {
    height: size[20],
    width: size[20],
  },
});
