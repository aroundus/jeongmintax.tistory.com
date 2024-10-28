import { useEffect } from 'react';
import * as stylex from '@stylexjs/stylex';
import { RiMenuFold2Line as RiMenuFold2LineIcon } from 'react-icons/ri';

import { Button } from '@/components/Button';
import { SearchTextField } from '@/components/SearchTextField';
import { getConfig } from '@/data/config';
import { getCategories } from '@/data/category';
import { getSession } from '@/data/session';
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

  const config = getConfig();
  const categories = getCategories();
  const session = getSession();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

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
          <div {...stylex.props(profileStyles.container)}>
            {session.isLoggedIn ? (
              <>
                <div {...stylex.props(imageStyles.container)}>
                  <img
                    alt={`${session.user.name} 이미지`}
                    height={80}
                    src={session.user.imageURL}
                    width={80}
                  />
                </div>
                <div {...stylex.props(mixinStyles.font(24, 400))}>
                  <h2 {...stylex.props(profileStyles.name, mixinStyles.font(28, 800))}>{session.user.name}</h2> 님 👋
                </div>
                <p {...stylex.props(profileStyles.email, mixinStyles.font(16, 400))}>{session.user.email}</p>
                <div {...stylex.props(buttonStyles.container)}>
                  <Button
                    href={`${config.TOP_SSL_URL}/member`}
                    size="sm"
                    stylexStyles={buttonStyles.button}
                    target="_blank"
                    variant="outlined"
                  >
                    ⚙️ 계정 관리
                  </Button>
                  <Button
                    href={config.LOGOUT_URL}
                    size="sm"
                    stylexStyles={buttonStyles.button}
                    target="_blank"
                    variant="outlined"
                  >
                    🔴 로그아웃
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div {...stylex.props(mixinStyles.font(24, 400))}>
                  <h2 {...stylex.props(profileStyles.name, mixinStyles.font(28, 800))}>안녕하세요</h2> 환영합니다 👋
                </div>
                <div {...stylex.props(buttonStyles.container)}>
                  <Button
                    href={config.LOGIN_URL}
                    size="sm"
                    stylexStyles={buttonStyles.button}
                    target="_blank"
                    variant="outlined"
                  >
                    🟢 로그인
                  </Button>
                </div>
              </>
            )}
          </div>
          <SearchTextField textColor={color.black} />
          <ul {...stylex.props(categoryStyles.container)}>
            {categories.map((category) => (
              <li
                key={category.name}
                {...stylex.props(categoryStyles.category, mixinStyles.font(16, 400))}
              >
                <a href={`/category${category.name === '전체' ? '' : `/${category.name}`}`}>
                  {category.name === '전체' ? <strong>{category.name}</strong> : `${category.name}`}
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
    maxWidth: 360,
    opacity: 0,
    overflowY: 'auto',
    pointerEvents: 'none',
    position: 'fixed',
    right: '-40%',
    top: 0,
    transition: 'right 0.3s ease-out, opacity 0.2s',
    width: '90%',
    zIndex: 4,
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
    zIndex: 4,
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
    padding: `${size[24]} ${size[36]}`,
  },
  height100: {
    height: '100%',
  },
});

const profileStyles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: size[8],
  },
  name: {
    display: 'inline',
  },
  email: {
    color: color.gray,
  },
});

const imageStyles = stylex.create({
  container: {
    alignItems: 'center',
    borderRadius: '50%',
    display: 'flex',
    height: size[80],
    justifyContent: 'center',
    overflow: 'hidden',
    width: size[80],
  },
});

const buttonStyles = stylex.create({
  container: {
    display: 'flex',
    gap: size[8],
    marginTop: size[16],
  },
  button: {
    color: 'black',
  },
});

const categoryStyles = stylex.create({
  container: {},
  category: {
    borderBottomColor: {
      default: `color-mix(in srgb, ${color.gray} 30%, white 50%)`,
      ':last-child': 'transparent',
    },
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    display: 'flex',
    gap: size[8],
    padding: `${size[12]} ${size[8]}`,
  },
  articleCount: {
    color: color.gray,
  },
});
