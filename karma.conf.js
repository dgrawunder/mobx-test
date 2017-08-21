// Karma configuration
// Generated on Tue Mar 14 2017 11:30:53 GMT+0100 (CET)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // mobx library (notice: use umd)
      {pattern: 'node_modules/mobx/lib/mobx.umd.js', watched: false, served: true, included: true},
      
      // Spec files
      // We need to disable watch true, otherwhise the specs run twice on spec file change, because
      // the created webpack bundle is also be watched
      {pattern: 'src/**/*.spec.@(js|jsx)', watched: false, served: true, included: true},

      // We dont need to watch out implementation files to rerun test, because this is done
      // by webpack preprocessor building a new bundle if any module is changed being referenced in a test file
    ],


    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.spec.@(js|jsx)': ['webpack', 'sourcemap']
    },

    webpack: require("./webpack.config.js"),

    webpackMiddleware: {
      noInfo: false, // prevents logs like webpack: wait until bundle finished: output
      stats: 'errors-only'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T: %m',
      terminal: true
    },

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 1
  })
};
