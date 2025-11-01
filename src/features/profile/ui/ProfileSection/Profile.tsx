import { colors } from '@stylexjs/open-props/lib/colors.stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import * as stylex from '@stylexjs/stylex';

import type { MenuItem } from '@/entities/menu/api';
import { mixinStyles } from '@/shared/stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';
import { viewports } from '@/shared/stylex/viewports.stylex';
import { Button } from '@/shared/ui';

interface ProfileProps {
  description: string;
  imageUrl: string;
  menu?: MenuItem[];
  name: string;
}

export function Profile({ description, imageUrl, menu, name }: ProfileProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <div
        {...stylex.props(imageStyles.container)}
        style={{ backgroundImage: `url(${imageUrl})` }}
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
    gap: sizes[16],
    margin: 'auto',
    maxWidth: viewports.layoutWidth,
    padding: sizes[24],
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
    gap: sizes[4],
    justifyContent: 'center',
  },
  name: {
    color: 'CanvasText',
  },
  description: {
    color: colors.stone5,
  },
});

const navigationStyles = stylex.create({
  container: {
    marginTop: sizes[12],
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: sizes[8],
  },
});
