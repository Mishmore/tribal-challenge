const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@app': 'src/app',
    '@state': 'src/app/state',
    '@assets': 'src/assets',
    '@components': 'src/components',
    '@helpers': 'src/helpers',
    '@hooks': 'src/hooks',
    '@pages': 'src/pages',
    '@translations': 'src/translations',
  })(config)

  return config
}
