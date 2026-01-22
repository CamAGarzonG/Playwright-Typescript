module.exports = {
  default: {
    require: ['ts-node/register', 'tests/step_definitions/**/*.ts'],
    format: ['progress'],
    //'publish-quiet': true,
    'gherkin-parse-options': {
      tagSyntax: 'explicit',
    },
  },
};