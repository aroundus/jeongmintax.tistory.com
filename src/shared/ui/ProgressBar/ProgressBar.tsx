import * as stylex from '@stylexjs/stylex';

import { colors } from '@/shared/stylex/colors.stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';

interface ProgressBarProps {
  offset?: number;
  value: number;
}

export function ProgressBar({ offset, value }: ProgressBarProps) {
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
        {...stylex.props(styles.bar)}
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
    backgroundColor: colors.primary,
    height: '100%',
    transition: 'width 200ms ease-out',
  },
});
