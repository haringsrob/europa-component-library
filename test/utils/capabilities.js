// Available screen resolutions:
// https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-SpecifyingtheScreenResolution

// Utils
const isTravis = require('./travis').isTravis;

const browsers = {
  chrome: {
    browserName: 'chrome',
    platform: 'Windows 10',
    version: '60.0',
    build: isTravis ? process.env.TRAVIS_BUILD_NUMBER : 'local-build',
    'tunnel-identifier': isTravis ? process.env.TRAVIS_JOB_NUMBER : '',
    screenResolution: '1920x1080',
  },
  ie: {
    browserName: 'internet explorer',
    version: '11.0',
    platform: 'Windows 7',
    build: isTravis ? process.env.TRAVIS_BUILD_NUMBER : 'local-build',
    'tunnel-identifier': isTravis ? process.env.TRAVIS_JOB_NUMBER : '',
    screenResolution: '1920x1080',
  },
  safari: {
    browserName: 'safari',
    version: '10.0',
    platform: 'macOS 10.12',
    seleniumVersion: '3.5.1',
    build: isTravis ? process.env.TRAVIS_BUILD_NUMBER : 'local-build',
    'tunnel-identifier': isTravis ? process.env.TRAVIS_JOB_NUMBER : '',
    screenResolution: '1920x1440',
  },
  firefox: {
    browserName: 'firefox',
    version: '54.0',
    platform: 'Windows 7',
    build: isTravis ? process.env.TRAVIS_BUILD_NUMBER : 'local-build',
    'tunnel-identifier': isTravis ? process.env.TRAVIS_JOB_NUMBER : '',
    screenResolution: '1920x1080',
  },
};

module.exports.getCapabilities = () => {
  if (process.env.TEST_BROWSER) {
    return [browsers[process.env.TEST_BROWSER]];
  }

  return Object.values(browsers);
};