module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@babel/preset-env', { modules: false }], //presets:预设包
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
}
