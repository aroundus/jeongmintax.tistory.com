import { Fragment, useEffect, useState } from 'react';

import * as stylex from '@stylexjs/stylex';
import { throttle } from 'lodash-es';

import { mixinStyles } from '@/shared/stylex';
import { colors } from '@/shared/stylex/colors.stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';

interface FloatingTOCProps {
  target: HTMLElement | null;
}

interface TOCStep {
  children?: TOCStep[];
  text: string;
  yOffset: number;
}

export function FloatingTOC({ target }: FloatingTOCProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [tocSteps, setTocSteps] = useState<TOCStep[]>([]);
  const [position, setPosition] = useState<React.CSSProperties['position']>('absolute');
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  function setTocStepsOffset() {
    if (target === null) {
      return;
    }

    const steps: TOCStep[] = [];
    const headings = target.querySelectorAll('h2, h3') as NodeListOf<HTMLHeadingElement>;

    headings.forEach((heading) => {
      const headingRect = heading.getBoundingClientRect();
      const { scrollY } = window;

      if (heading.tagName.toLowerCase() === 'h2') {
        steps.push({
          children: [],
          text: heading.textContent!,
          yOffset: headingRect.top + scrollY - 120,
        });
      } else if (heading.tagName.toLowerCase() === 'h3') {
        steps[steps.length - 1].children!.push({
          text: heading.textContent!,
          yOffset: headingRect.top + scrollY - 120,
        });
      }
    });

    setTocSteps(steps);
  }

  function handleStepClick(top: number) {
    window.scroll({
      top,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    function handleScroll() {
      const { scrollY } = window;

      tocSteps.forEach((step, stepIndex) => {
        if (step.yOffset < scrollY + 20) {
          setActiveStep(stepIndex + 1);

          if (step.children) {
            step.children.forEach((childStep, childStepIndex) => {
              if (childStep.yOffset < scrollY + 20) {
                setActiveStep(stepIndex + 1 + (childStepIndex + 1) / 10);
              }
            });
          }
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
    if (target === null) {
      return;
    }

    const handleScroll = () => {
      const targetRect = target.getBoundingClientRect();
      const { scrollY } = window;

      setXOffset(targetRect.left + targetRect.width);

      if (scrollY < target.offsetTop) {
        setPosition('absolute');
        setYOffset(target.offsetTop);
      } else if (scrollY < targetRect.height) {
        setPosition('fixed');
        setYOffset(0);
      }
    };

    const throttledScroll = throttle(handleScroll, 50);

    handleScroll();
    ['resize', 'orientationChange', 'scroll'].forEach((type) => {
      window.addEventListener(type, throttledScroll);
    });

    setTocStepsOffset();

    return () => {
      ['resize', 'orientationChange', 'scroll'].forEach((type) => {
        window.removeEventListener(type, throttledScroll);
      });
    };
  }, [target]);

  return (
    <div
      {...stylex.props(styles.container)}
      style={{
        position,
        left: xOffset,
        top: `calc(${yOffset}px + 80px)`,
      }}
    >
      <ol {...stylex.props(styles.content, mixinStyles.font(16, 400))}>
        {tocSteps.map((step, stepIndex) => (
          <Fragment key={step.text}>
            <li {...stylex.props(stepStyles.container)}>
              <div
                {...stylex.props(stepStyles.step, stepIndex + 1 === activeStep && stepStyles.isActive)}
                onClick={() => handleStepClick(step.yOffset)}
              >
                <span>{stepIndex + 1}.</span> {step.text}
              </div>
              {step.children && (
                <ol {...stylex.props(childStepStyles.container)}>
                  {step.children.map((childStep, childStepIndex) => (
                    <Fragment key={childStep.text}>
                      <li
                        {...stylex.props(
                          stepStyles.step,
                          stepIndex + 1 === Math.floor(activeStep) &&
                            childStepIndex + 1 === (activeStep * 10) % 10 &&
                            stepStyles.isActive,
                        )}
                        onClick={() => handleStepClick(childStep.yOffset)}
                      >
                        <span>
                          {stepIndex + 1}-{childStepIndex + 1}.
                        </span>{' '}
                        {childStep.text}
                      </li>
                    </Fragment>
                  ))}
                </ol>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </div>
  );
}

const styles = stylex.create({
  container: {
    padding: sizes[16],
  },
  content: {
    maxWidth: 320,
  },
});

const stepStyles = stylex.create({
  container: {},
  step: {
    color: {
      default: colors.gray,
      ':hover': {
        '@media (hover: hover)': colors.primary,
      },
    },
    cursor: 'pointer',
    fontVariantNumeric: 'tabular-nums',
    marginTop: '0.2em',
    transition: '200ms ease-out',
  },
  isActive: {
    color: 'CanvasText',
  },
});

const childStepStyles = stylex.create({
  container: {
    marginLeft: '1.2em',
  },
});
