import * as stylex from '@stylexjs/stylex';

export function Sample() {
  return <div {...stylex.props(styles.container)}></div>;
}

const styles = stylex.create({
  container: {},
});
