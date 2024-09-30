import * as stylex from '@stylexjs/stylex';
import { RiMenuFold2Line as RiMenuFold2LineIcon } from 'react-icons/ri';

import { SearchTextField } from '@/components/SearchTextField';
import { getCategories } from '@/data/category';
import { useBrowser, useMediaQuery } from '@/hooks';
import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { size } from '@/styles/size.stylex';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
export function NavigationDrawer({ isOpen, onClose: handleClose }: NavigationDrawerProps) {
  const { isDesktop } = useBrowser();
  const isPortrait = useMediaQuery('(orientation: portrait)');

  const categories = getCategories();

  return (
    <>
      {isOpen && (
        <div
          {...stylex.props(styles.overlay)}
          onClick={handleClose}
        />
      )}
      <div {...stylex.props(styles.container, mixinStyles.hideScrollbar('y'), isOpen && styles.isOpen)}>
        <div {...stylex.props(headerStyles.container)}>
          <RiMenuFold2LineIcon
            style={{ height: 28, width: 28 }}
            onClick={handleClose}
          />
        </div>
        <div {...stylex.props(contentStyles.container, (isDesktop || isPortrait) && contentStyles.height100)}>
          <SearchTextField textColor={color.black} />
          <ul {...stylex.props(categoryStyles.container)}>
            {categories.map((category) => (
              <li
                key={category.name}
                {...stylex.props(categoryStyles.category)}
              >
                <a href={`/category${category.name === '전체' ? '' : `/${category.name}`}`}>
                  {category.name === '전체' ? <strong>{category.name}</strong> : `#${category.name}`}
                </a>
                <span {...stylex.props(categoryStyles.articleCount)}>
                  {new Intl.NumberFormat().format(category.articleCount)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const styles = stylex.create({
  container: {
    backgroundColor: 'white',
    borderBottomLeftRadius: size[24],
    borderTopLeftRadius: size[24],
    bottom: 0,
    color: color.black,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '360px',
    opacity: 0,
    overflowY: 'auto',
    pointerEvents: 'none',
    position: 'fixed',
    right: '-40%',
    top: 0,
    transition: 'right 0.3s ease-out, opacity 0.2s',
    width: '90%',
    zIndex: 2,
  },
  isOpen: {
    opacity: 1,
    pointerEvents: 'auto',
    right: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 2,
  },
});

const headerStyles = stylex.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: `${size[20]} ${size[24]}`,
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
});

const contentStyles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: size[24],
    padding: size[24],
  },
  height100: {
    height: '100%',
  },
});

const categoryStyles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: size[8],
  },
  category: {
    display: 'flex',
    gap: size[8],
  },
  articleCount: {
    color: color.gray,
  },
});
