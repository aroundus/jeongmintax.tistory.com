import { colors } from '@stylexjs/open-props/lib/colors.stylex';
import * as stylex from '@stylexjs/stylex';

import { useIsDarkMode } from '@/shared/lib';
import { sizes } from '@/shared/stylex/sizes.stylex';

interface ProgressBarProps {
  offset?: number;
  value: number;
}

export function ProgressBar({ offset, value }: ProgressBarProps) {
  const isDarkMode = useIsDarkMode();

  const innerBarStyle: React.CSSProperties = { width: `${value}%` };

  if (value === 0 || value === 100) {
    innerBarStyle.border = 'none';
  }

  return (
    <div
      {...stylex.props(styles.container)}
      style={{ top: offset || 0 }}
    >
      <div
        {...stylex.props(styles.bar, isDarkMode && styles.isDarkMode)}
        style={{
          width: `${value <= 1 ? value * 100 : value}%`,
        }}
      />
    </div>
  );
}

const styles = stylex.create({
  container: {
    height: sizes[4],
    position: 'sticky',
    transition: 'top 200ms ease-in-out',
    zIndex: 2,
  },
  bar: {
    backgroundColor: colors.jungle7,
    height: '100%',
    transition: 'width 200ms ease-out',
  },
  isDarkMode: {
    backgroundColor: colors.yellow5,
  },
});
