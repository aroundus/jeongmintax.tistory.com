import { useMemo, useState } from 'react';

import { colors } from '@stylexjs/open-props/lib/colors.stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import * as stylex from '@stylexjs/stylex';
import { shuffle } from 'lodash'; // BUG: production 모드에서 lodash-es 패키지로 shuffle 함수 사용시 오류 발생

import type { MenuService } from '@/entities/menu/api';
import { mixinStyles } from '@/shared/stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';
import { Button } from '@/shared/ui';

interface ProfileProps {
  article: {
    title: string;
  };
  imageUrl: string;
  menu?: MenuService.MenuItem[];
  name: string;
}

const DESCRIPTIONS = [
  '내용에 대해 궁금한 점이 있다면 문의해 보세요.',
  '내용에 대해 더 알아보고 싶은 부분이 있다면 문의해 보세요.',
  '내용과 관련된 일을 진행 중인가요?',
];

export function Profile({ article, imageUrl, menu, name }: ProfileProps) {
  const [descriptions] = useState(DESCRIPTIONS);

  const description = useMemo(() => shuffle(descriptions)[0], [descriptions]);

  return (
    <section {...stylex.props(styles.container)}>
      <div
        {...stylex.props(imageStyles.container)}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div {...stylex.props(contentStyles.container)}>
        <div {...stylex.props(contentStyles.name, mixinStyles.font(18, 700))}>{name}</div>
        <p {...stylex.props(contentStyles.description, mixinStyles.font(16, 400))}>
          <strong>{article.title}</strong>
          <br />
          {description}
        </p>
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
    </section>
  );
}

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: sizes[16],
    margin: 'auto',
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
