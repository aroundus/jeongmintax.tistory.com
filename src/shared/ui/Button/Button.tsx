import React from 'react';
import * as stylex from '@stylexjs/stylex';
import { animations } from '@stylexjs/open-props/lib/animations.stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';

import { mixinStyles } from '@/shared/stylex';
import { colors } from '@/shared/stylex/colors.stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';

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
    size === 'sm' && mixinStyles.font(14, 400),
    size === 'md' && mixinStyles.font(16, 500),
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
    display: 'inline-flex',
    filter: {
      default: 'brightness(120%)',
      ':active:not(:disabled)': 'brightness(140%)',
      ':disabled': 'contrast(50%)',
      ':hover': {
        '@media (hover: hover)': 'brightness(100%)',
      },
    },
    gap: sizes[8],
    justifyContent: 'center',
    position: 'relative',
    transitionDuration: '300ms',
  },
  isFullWidth: {
    width: '100%',
  },

  // Size
  sm: {
    borderRadius: sizes[8],
    minWidth: sizes[100],
    padding: `${sizes[2]} ${sizes[12]}`,
  },
  md: {
    borderRadius: sizes[8],
    minWidth: sizes[120],
    padding: `${sizes[8]} ${sizes[16]}`,
  },
  lg: {
    borderRadius: sizes[12],
    minWidth: sizes[140],
    padding: `${sizes[12]} ${sizes[24]}`,
  },

  // Variant
  contained: (colorProp: Color) => ({
    backgroundColor: colors[`${colorProp}Alpha`],
    borderColor: colors[`${colorProp}Alpha`],
    color: 'CanvasText',
  }),
  outlined: (colorProp: Color) => ({
    borderColor: colors[colorProp],
    color: 'CanvasText',
  }),
  text: (colorProp: Color) => ({
    borderWidth: 0,
    color: {
      default: 'CanvasText',
      ':hover': colors[colorProp],
    },
  }),

  icon: {
    height: sizes[32],
    width: sizes[32],
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
    borderWidth: sizes[4],
    display: 'block',
    margin: 'auto',
  },

  // Color
  primary: {
    borderColor: colors.gray,
    borderTopColor: 'white',
  },
  secondary: {
    borderColor: 'white',
    borderTopColor: colors.gray,
  },

  // Size
  sm: {
    height: sizes[16],
    width: sizes[16],
  },
  md: {
    height: sizes[20],
    width: sizes[20],
  },
  lg: {
    height: sizes[20],
    width: sizes[20],
  },
});
