import { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { BiSearch as BiSearchIcon } from 'react-icons/bi';

import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { size } from '@/styles/size.stylex';

interface SearchFieldProps {
  isFullWidth?: boolean;
}

export function SearchField({ isFullWidth }: SearchFieldProps) {
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
    <div {...stylex.props(styles.container, isFullWidth && styles.width100)}>
      <input
        {...stylex.props(styles.input, mixinStyles.font(16, 400))}
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
    borderColor: color.gray,
    display: 'flex',
    justifyContent: 'space-between',
  },
  width100: {
    width: '100%',
  },
  input: {
    color: {
      '::placeholder': color.gray,
    },
    minWidth: 200,
    outline: 'none',
    padding: size[8],
  },
  icon: {
    color: {
      ':hover': {
        '@media (hover: hover)': color.primary,
      },
    },
    cursor: 'pointer',
    height: 24,
    transition: 'color 300ms ease',
    width: 24,
  },
});
