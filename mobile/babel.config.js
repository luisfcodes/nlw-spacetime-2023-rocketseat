module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewindcss/babel', require.resolve('expo-router/babel')],
  }
}
