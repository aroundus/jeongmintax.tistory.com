import { useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { throttle } from 'lodash-es';

import { sizes } from '@/shared/stylex/sizes.stylex';
import { Button } from '@/shared/ui';

interface FloatingActiveHeadingProps {
  offset?: number;
  target: HTMLElement | null;
}

interface TOCStep {
  text: string;
  yOffset: number;
}

export function FloatingActiveHeading({ offset, target }: FloatingActiveHeadingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [tocSteps, setTOCSteps] = useState<TOCStep[]>([]);

  function setTOCStepsOffset() {
    if (target === null) {
      return;
    }

    const steps: TOCStep[] = [];
    const headings = target.querySelectorAll('h2') as NodeListOf<HTMLHeadingElement>;

    headings.forEach((heading) => {
      const headingRect = heading.getBoundingClientRect();
      const { scrollY } = window;

      steps.push({
        text: heading.textContent!,
        yOffset: headingRect.top + scrollY - 120,
      });
    });

    setTOCSteps(steps);
  }

  function handleClick(top: number) {
    window.scroll({
      top,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    function handleScroll() {
      if (tocSteps.length === 0) {
        return;
      }

      const { scrollY } = window;

      if (tocSteps[0].yOffset < scrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      tocSteps.forEach((step, stepIndex) => {
        if (step.yOffset < scrollY + 20) {
          setActiveStepIndex(stepIndex);
        }
      });
    }

    const throttledScroll = throttle(handleScroll, 50);

    handleScroll();
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [tocSteps]);

  useEffect(() => {
    setTOCStepsOffset();
  }, [target]);

  return (
    <>
      {tocSteps.length > 0 && (
        <div
          {...stylex.props(styles.container, isVisible && styles.isVisible)}
          style={{ top: offset || 0 }}
        >
          <Button
            size="md"
            stylexStyles={styles.button}
            variant="contained"
            onClick={() => handleClick(tocSteps[activeStepIndex].yOffset)}
          >
            {activeStepIndex + 1}. {tocSteps[activeStepIndex].text}
          </Button>
        </div>
      )}
    </>
  );
}

const styles = stylex.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    opacity: 0,
    padding: `0 ${sizes[24]}`,
    position: 'sticky',
    transform: 'translateY(-100px)',
    transition: 'opacity 200ms ease-out, transform 400ms ease',
    zIndex: 1,
  },
  isVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  button: {
    backgroundColor: '#000A',
    color: 'white',
    textAlign: 'right',
  },
});
