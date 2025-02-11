import { useEffect, useState } from 'react';

import type { Meta } from '@storybook/react';

import { FloatingTOC } from './FloatingTOC';

import '@/features/article/ui/article.scss';

const meta = {
  argTypes: {},
  component: FloatingTOC,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'features/article/FloatingTOC',
} satisfies Meta<typeof FloatingTOC>;

export default meta;

export function FloatingTOCStory() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.getElementById('article'));
  }, []);

  return (
    <>
      <section
        id="article"
        style={{
          marginBottom: '100vh',
          marginLeft: '4em',
          maxWidth: 640,
          minWidth: 320,
          paddingRight: '1em',
          width: '80%',
        }}
      >
        <h2 id="1">iPhone 16 Pro.</h2>
        <p>
          iPhone 12 이상의 모델을 보상 판매하고 iPhone 16 또는 iPhone 16 Pro 구입 시 사용할 수 있는 ₩200,000–₩930,000
          상당의 크레딧을 받으세요.
        </p>
        <h2 id="2">일단 핵심부터.</h2>
        <h3 id="2-1">카메라 컨트롤로 순간 포착을 신속하게, 스마트하게, 손끝으로.</h3>
        <img src="https://www.apple.com/kr/iphone-16-pro/c/images/overview/media-card/highlights_camera_control_endframe__dnpy5lekpmwm_large_2x.jpg" />
        <h3 id="2-2">초당 120 프레임의 4K Dolby Vision. 4개의 스튜디오급 마이크. 주머니 속의 영상 제작 스튜디오.</h3>
        <img src="https://www.apple.com/v/iphone-16-pro/c/images/overview/media-card/highlights_dolby_endframe__b6l9i0s93wr6_large_2x.jpg" />
        <h3 id="2-3">그 어느 때보다 얇은 베젤. 보다 커진 디스플레이. 놀랍도록 빠져들다.</h3>
        <img src="https://www.apple.com/kr/iphone-16-pro/c/images/overview/media-card/thin__eqeewfn1mgsy_large_2x.jpg" />
        <h3 id="2-4">완전히 새로운 A18 Pro 칩. 독보적인 성능. 전례 없는 효율성.</h3>
        <img src="https://www.apple.com/v/iphone-16-pro/c/images/overview/media-card/highlights_chip_endframe__d1d71a0qjseq_large_2x.jpg" />
        <h3 id="2-5">배터리 사용 시간의 거대한 도약. 멈추지 않는 즐거움.</h3>
        <img src="https://www.apple.com/kr/iphone-16-pro/c/images/overview/media-card/battery__fv8w2lr5h1qy_large_2x.jpg" />
        <h3 id="2-6">Apple Intelligence를 위해 설계된 최초의 iPhone. 보다 밀접하고 보다 안전하고 보다 강력하다.</h3>
        <img src="https://www.apple.com/v/iphone-16-pro/c/images/overview/media-card/highlights_apple_intelligence_endframe__esdley4zqkya_large_2x.jpg" />
        <h2 id="3">견고함. 아름다움. 티타늄.</h2>
        <p>
          iPhone 16 Pro는 5등급 티타늄 디자인을 채택했으며 마이크로블라스팅 공법으로 정교하게 처리된 새로운 텍스처를
          자랑합니다. 티타늄은 가장 높은 비강도를 지닌 금속 중 하나로, Pro 모델이 놀랍도록 견고하고 가볍기까지 할 수
          있는 이유죠. iPhone 16 Pro는 새로운 데저트 티타늄을 비롯해 네 가지 멋진 마감으로 만날 수 있습니다.
        </p>
        <p>
          100% 재활용 알루미늄 소재로 만든 열처리 하부 구조와 후면 글래스 설계 최적화를 통해 열 방출 효율을 높이는 등
          내부 설계도 한층 개선되어 iPhone 15 Pro 대비 최대 20% 더 탁월한 지속 성능을 발휘합니다. 다시 말해, 고사양
          게임을 비롯해 당신이 좋아하는 것을 더 오래 마음껏 즐길 수 있다는 얘기죠.
        </p>
      </section>
      <FloatingTOC target={target} />
    </>
  );
}

FloatingTOCStory.storyName = 'FloatingTOC';
