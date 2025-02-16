import { useEffect, useState } from 'react';

import type { Meta } from '@storybook/react';

import '@/features/article/ui/article.scss';

import { FloatingActiveHeading } from './FloatingActiveHeading';

const meta = {
  argTypes: {},
  component: FloatingActiveHeading,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'features/article/FloatingActiveHeading',
} satisfies Meta<typeof FloatingActiveHeading>;

export default meta;

export function FloatingActiveHeadingStory() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.getElementById('article'));
  }, []);

  return (
    <>
      <FloatingActiveHeading
        offset={16}
        target={target}
      />
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
        <h2 id="2-1">카메라 컨트롤로 순간 포착을 신속하게, 스마트하게, 손끝으로.</h2>
        <img src="https://www.apple.com/kr/iphone-16-pro/c/images/overview/media-card/highlights_camera_control_endframe__dnpy5lekpmwm_large_2x.jpg" />
        <h2 id="2-2">초당 120 프레임의 4K Dolby Vision. 4개의 스튜디오급 마이크. 주머니 속의 영상 제작 스튜디오.</h2>
        <img src="https://www.apple.com/v/iphone-16-pro/c/images/overview/media-card/highlights_dolby_endframe__b6l9i0s93wr6_large_2x.jpg" />
        <h2 id="2-3">그 어느 때보다 얇은 베젤. 보다 커진 디스플레이. 놀랍도록 빠져들다.</h2>
        <img src="https://www.apple.com/kr/iphone-16-pro/c/images/overview/media-card/thin__eqeewfn1mgsy_large_2x.jpg" />
        <h2 id="2-4">완전히 새로운 A18 Pro 칩. 독보적인 성능. 전례 없는 효율성.</h2>
        <img src="https://www.apple.com/v/iphone-16-pro/c/images/overview/media-card/highlights_chip_endframe__d1d71a0qjseq_large_2x.jpg" />
        <h2 id="2-5">배터리 사용 시간의 거대한 도약. 멈추지 않는 즐거움.</h2>
        <img src="https://www.apple.com/kr/iphone-16-pro/c/images/overview/media-card/battery__fv8w2lr5h1qy_large_2x.jpg" />
        <h2 id="2-6">Apple Intelligence를 위해 설계된 최초의 iPhone. 보다 밀접하고 보다 안전하고 보다 강력하다.</h2>
        <img src="https://www.apple.com/v/iphone-16-pro/c/images/overview/media-card/highlights_apple_intelligence_endframe__esdley4zqkya_large_2x.jpg" />
      </section>
    </>
  );
}

FloatingActiveHeadingStory.storyName = 'FloatingActiveHeading';
