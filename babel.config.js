// babel.config.js
export default {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        targets: '> 0.25%, not dead, IE 11',
      },
    ],
    '@babel/preset-react',
  ],
}
