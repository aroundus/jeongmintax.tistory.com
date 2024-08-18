import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import * as stylex from '@stylexjs/stylex';

import { useIsMobile } from '@/hooks';
import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

interface ProfileProps {
  description: string;
  imageURL: string;
  name: string;
}

export function Profile({ description, imageURL, name }: ProfileProps) {
  const isMobile = useIsMobile();

  return (
    <div {...stylex.props(styles.container)}>
      <div
        {...stylex.props(imageStyles.container)}
        style={{ backgroundImage: `url(${imageURL})` }}
      />
      <div {...stylex.props(contentStyles.container)}>
        <div {...stylex.props(mixinStyles.font(18, 700))}>{name}</div>
        <p {...stylex.props(contentStyles.description, mixinStyles.font(isMobile ? 14 : 16, 400))}>{description}</p>
      </div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: 'flex',
    gap: size[16],
    margin: 'auto',
    maxWidth: viewport.contentWidth,
    padding: size[24],
  },
});

const imageStyles = stylex.create({
  container: {
    backgroundPosition: 'center',
    backgroundSize: '100%',
    borderRadius: '50%',
    boxShadow: shadows.shadow2,
    height: 100,
    width: 100,
  },
});

const contentStyles = stylex.create({
  container: {
    display: 'flex',
    flex: '1 1 0',
    flexDirection: 'column',
    gap: size[4],
    justifyContent: 'center',
  },
  description: {
    color: color.gray,
  },
});
