import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import * as stylex from '@stylexjs/stylex';

import { Button } from '@/components/Button/Button';
import { useIsMobile } from '@/hooks';
import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

interface ProfileProps {
  description: string;
  imageURL: string;
  menu?: {
    name: string;
    path: string;
  }[];
  name: string;
}

export function Profile({ description, imageURL, menu, name }: ProfileProps) {
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
        {menu && (
          <nav {...stylex.props(navigationStyles.container)}>
            <ul {...stylex.props(navigationStyles.list, mixinStyles.font(14, 500))}>
              {menu?.map((link) => (
                <li key={link.path}>
                  <a href={link.path}>
                    <Button
                      size="sm"
                      variant="outlined"
                    >
                      {link.name}
                    </Button>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
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

const navigationStyles = stylex.create({
  container: {
    marginTop: size[12],
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: size[8],
  },
});
