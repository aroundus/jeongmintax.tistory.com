import { Container } from './Container';
import { ScrollToTopButton } from './ScrollToTopButton';

type FloatingWidgetType = {
  Container: typeof Container;
  ScrollToTopButton: typeof ScrollToTopButton;
};

export const FloatingWidget: FloatingWidgetType = {
  Container,
  ScrollToTopButton,
} as const;
