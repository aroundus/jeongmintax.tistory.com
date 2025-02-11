import { useState } from 'react';

import * as stylex from '@stylexjs/stylex';
import { BiSearch as BiSearchIcon } from 'react-icons/bi';

import { mixinStyles } from '@/shared/stylex';
import { colors } from '@/shared/stylex/colors.stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';

interface SearchTextFieldProps {
  isFullWidth?: boolean;
  textColor?: string;
}

export function SearchTextField({ isFullWidth, textColor = '' }: SearchTextFieldProps) {
  const [value, setValue] = useState('');

  const handleIconClick = () => {
    if (value) {
      window.location.href = `/search/${value}`;
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (value && event.key === 'Enter') {
      window.location.href = `/search/${value}`;
    }
  };

  return (
    <div {...stylex.props(styles.container, isFullWidth && styles.isFullWidth)}>
      <input
        {...stylex.props(styles.input(textColor), mixinStyles.font(18, 400))}
        placeholder="검색어를 입력해 주세요."
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <BiSearchIcon
        {...stylex.props(styles.icon)}
        onClick={handleIconClick}
      />
    </div>
  );
}

const styles = stylex.create({
  container: {
    alignItems: 'center',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: colors.gray,
    display: 'flex',
    justifyContent: 'space-between',
  },
  isFullWidth: {
    width: '100%',
  },
  input: (textColor: string) => ({
    color: {
      default: textColor || 'CanvasText',
      '::placeholder': colors.gray,
    },
    minWidth: 200,
    outline: 'none',
    padding: `${sizes[4]} ${sizes[8]}`,
    width: '100%',
  }),
  icon: {
    color: {
      ':hover': {
        '@media (hover: hover)': colors.primary,
      },
    },
    cursor: 'pointer',
    height: sizes[24],
    transition: 'color 300ms ease',
    width: sizes[24],
  },
});
