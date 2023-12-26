module.exports = {
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-react', { runtime: 'automatic' }],
    ['@babel/preset-typescript'],
    ['@wyw-in-js']
  ],
  // plugins: [
  //   [
  //     '@babel/plugin-transform-runtime',
  //     {
  //       corejs: 3,
  //     },
  //   ],
  // ],
};
