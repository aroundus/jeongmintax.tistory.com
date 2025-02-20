import * as stylex from '@stylexjs/stylex';
import { FcDisclaimer as FcDisclaimerIcon } from 'react-icons/fc';
import { isRouteErrorResponse } from 'react-router-dom';

import { sizes } from '@/shared/stylex/sizes.stylex';

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.content)}>
        <FcDisclaimerIcon
          style={{
            height: 48,
            width: 48,
          }}
        />
        {children}
      </div>
    </div>
  );
}

export function ErrorBoundary(error: unknown) {
  if (isRouteErrorResponse(error)) {
    return (
      <Container>
        <h1>{error.status}</h1>
        <p>{error.data}</p>
      </Container>
    );
  }

  if (error instanceof Error) {
    return (
      <Container>
        <h1>Error</h1>
        <p>{error.message}</p>
        <pre>{error.stack}</pre>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Error</h1>
      <p>알 수 없는 오류입니다.</p>
    </Container>
  );
}

const styles = stylex.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    padding: sizes[24],
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});
