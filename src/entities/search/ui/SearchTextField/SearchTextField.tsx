import { useMemo, useState } from 'react';

import { colors } from '@stylexjs/open-props/lib/colors.stylex';
import * as stylex from '@stylexjs/stylex';
import { shuffle } from 'lodash';
import { BiSearch as BiSearchIcon } from 'react-icons/bi';

import { useIsDarkMode } from '@/shared/lib';
import { mixinStyles } from '@/shared/stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';

interface SearchTextFieldProps {
  isFullWidth?: boolean;
  textColor?: string;
}

const PLACEHOLDERS = [
  '무엇을 도와드릴까요?',
  '무엇이든 검색해 보세요.',
  '어떤 정보를 찾고 계신가요?',
  '지금 궁금한 것은 무엇인가요?',
  '찾고 계신 정보가 있나요?',
];

export function SearchTextField({ isFullWidth, textColor = '' }: SearchTextFieldProps) {
  const isDarkMode = useIsDarkMode();
  const [placeholders] = useState(PLACEHOLDERS);
  const [value, setValue] = useState('');

  const placeholder = useMemo(() => shuffle(placeholders)[0], [placeholders]);

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
        {...stylex.props(styles.input(textColor), mixinStyles.font(16, 400))}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <BiSearchIcon
        {...stylex.props(styles.icon(isDarkMode))}
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
    borderColor: colors.stone8,
    display: 'flex',
    justifyContent: 'space-between',
  },
  isFullWidth: {
    width: '100%',
  },
  input: (textColor: string) => ({
    color: {
      default: `${textColor || 'CanvasText'}`,
      '::placeholder': colors.stone5,
    },
    minWidth: 200,
    outline: 'none',
    padding: `${sizes[4]} ${sizes[2]}`,
    width: '100%',
  }),
  icon: (isDarkMode: boolean) => ({
    color: {
      ':hover': {
        '@media (hover: hover)': `${isDarkMode ? colors.yellow5 : colors.jungle7}`,
      },
    },
    cursor: 'pointer',
    height: sizes[24],
    transition: 'color 300ms ease',
    width: sizes[24],
  }),
});
