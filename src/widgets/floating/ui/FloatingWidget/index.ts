import { Container } from './Container';
import { GoNextPageButton } from './GoNextPageButton';
import { GoPrevPageButton } from './GoPrevPageButton';
import { ScrollToTopButton } from './ScrollToTopButton';

type FloatingWidgetType = {
  Container: typeof Container;
  GoNextPageButton: typeof GoNextPageButton;
  GoPrevPageButton: typeof GoPrevPageButton;
  ScrollToTopButton: typeof ScrollToTopButton;
};

export const FloatingWidget: FloatingWidgetType = {
  Container,
  GoNextPageButton,
  GoPrevPageButton,
  ScrollToTopButton,
} as const;
