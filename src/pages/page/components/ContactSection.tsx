import * as stylex from '@stylexjs/stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';

import { Button } from '@/components/Button';
import { PublicImage } from '@/components/PublicImage';
import { useIsMobile } from '@/hooks';
import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

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
        저희는 최신 세법을 적용한 유연하고 전문적인 세무 전략을 지원합니다. 어려운 세무에 궁금증이 있거나 상담이 필요한
        경우 아래의 버튼을 클릭해 연락해 주세요. 성공을 위한 최적의 세무 파트너로 최선을 다하겠습니다.
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
    gap: size[24],
    margin: 'auto',
    maxWidth: viewport.contentWidth,
    padding: `${size[40]} ${size[24]}`,
  },
  paragraph: {
    marginTop: size[32],
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
    gap: size[8],
    justifyContent: 'center',
    maxWidth: '100%',
  },
});
