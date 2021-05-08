export const getClassName = (...classNames) =>
  classNames.reduce((s0, cn = '') => `${s0} ${cn}`.trim(), '');
