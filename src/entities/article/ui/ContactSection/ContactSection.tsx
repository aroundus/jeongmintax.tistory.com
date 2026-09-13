import { LinkButton } from '@/shared/ui';
import { PublicImage } from '@/shared/ui-deprecated';

export function ContactSection() {
  return (
    <section className="mx-auto flex max-w-[800px] flex-col items-center gap-10 p-10 px-6">
      <PublicImage
        alt="명함 이미지"
        className="w-[400px] max-w-full shadow-lg"
        src="/images/name-card.jpg"
      />
      <p className="mt-8 text-lg">
        저희는 고객님의 상황에 맞춘 전문적인 세무 전략을 제공합니다. 세무 관련 상담이 필요하시면 언제든지 편하게 문의해
        주세요. 성공을 위한 최적의 세무 파트너가 되기 위해 최선을 다하겠습니다.
      </p>
      <div className="flex max-w-full flex-wrap justify-center gap-2">
        <LinkButton
          href="http://talk.naver.com/w5igl2?frm=pnmb&frm=nmb_detail"
          size="lg"
          target="_blank"
          variant="outlined"
        >
          💬 네이버 톡톡 실시간 문의
        </LinkButton>
        <LinkButton
          href="https://forms.gle/Boiaf1ViKZErxTLY8"
          size="lg"
          target="_blank"
          variant="outlined"
        >
          📝 상담 신청
        </LinkButton>
      </div>
    </section>
  );
}
