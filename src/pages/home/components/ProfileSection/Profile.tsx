import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import * as stylex from '@stylexjs/stylex';

import { Button } from '@/components/Button';
import type { MenuItem } from '@/data/menu';
import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

interface ProfileProps {
  description: string;
  imageURL: string;
  menu?: MenuItem[];
  name: string;
}

export function Profile({ description, imageURL, menu, name }: ProfileProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <div
        {...stylex.props(imageStyles.container)}
        style={{ backgroundImage: `url(${imageURL})` }}
      />
      <div {...stylex.props(contentStyles.container)}>
        <div {...stylex.props(contentStyles.name, mixinStyles.font(18, 700))}>{name}</div>
        <p {...stylex.props(contentStyles.description, mixinStyles.font(16, 400))}>{description}</p>
        {menu && (
          <nav {...stylex.props(navigationStyles.container)}>
            <ul {...stylex.props(navigationStyles.list, mixinStyles.font(14, 500))}>
              {menu?.map((menuItem) => (
                <li key={menuItem.path}>
                  <Button
                    href={menuItem.path}
                    size="sm"
                    target={menuItem.target}
                    variant="outlined"
                  >
                    {menuItem.name}
                  </Button>
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
    maxWidth: viewport.layoutWidth,
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
  name: {
    color: 'CanvasText',
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
