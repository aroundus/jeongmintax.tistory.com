import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import * as stylex from '@stylexjs/stylex';

import { useIsMobile } from '@/shared/lib';
import { sizes } from '@/shared/stylex/sizes.stylex';
import { viewports } from '@/shared/stylex/viewports.stylex';
import { Button, PublicImage } from '@/shared/ui';

export function ContactSection() {
  const isMobile = useIsMobile();

  return (
    <section {...stylex.props(styles.container)}>
      <PublicImage
        {...stylex.props(styles.image)}
        alt="명함 이미지"
        src="/images/name-card.jpg"
      />
      <p {...stylex.props(styles.paragraph)}>
        저희는 고객님의 상황에 맞춘 전문적인 세무 전략을 제공합니다. 세무 관련 상담이 필요하시면 언제든지 편하게 문의해
        주세요. 성공을 위한 최적의 세무 파트너가 되기 위해 최선을 다하겠습니다.
      </p>
      <div {...stylex.props(buttonStyles.container)}>
        <Button
          color="primary"
          href="http://talk.naver.com/w5igl2?frm=pnmb&frm=nmb_detail"
          isFullWidth={isMobile}
          size={isMobile ? 'md' : 'lg'}
          target="_blank"
          variant="outlined"
        >
          💬 네이버 톡톡 실시간 문의
        </Button>
        <Button
          color="primary"
          href="https://forms.gle/Boiaf1ViKZErxTLY8"
          isFullWidth={isMobile}
          size={isMobile ? 'md' : 'lg'}
          target="_blank"
          variant="outlined"
        >
          📝 상담 신청
        </Button>
      </div>
    </section>
  );
}

const styles = stylex.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: sizes[40],
    margin: 'auto',
    maxWidth: viewports.contentWidth,
    padding: `${sizes[40]} ${sizes[24]}`,
  },
  paragraph: {
    marginTop: sizes[32],
  },
  image: {
    boxShadow: shadows.shadow4,
    maxWidth: '100%',
    width: 400,
  },
});

const buttonStyles = stylex.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: sizes[8],
    justifyContent: 'center',
    maxWidth: '100%',
  },
});
