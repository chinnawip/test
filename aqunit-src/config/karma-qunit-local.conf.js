// Karma configuration
// Generated on Wed Jul 24 2013 13:08:44 GMT+0530 (India Standard Time)

// base path, that will be used to resolve files and exclude
basePath = '../';

urlRoot ='/';

frameworks = ['qunit', 'jasmine'];
// list of files / patterns to load in the browser
files = [
    JASMINE,
    JASMINE_ADAPTER,
    QUNIT,
    QUNIT_ADAPTER,

    // dependencies
    {pattern: 'js/jquery-2.0.2.min.js', watched: false, served: true, included: true},
    {pattern: 'js/jasmine-jquery-1.3.1.js', watched: false, served: true, included: true},
    {pattern: 'js/jquery-migrate-1.2.1.js', watched: false, served: true, included: true},
    {pattern: 'js/languages/jquery.validationEngine-en.js', watched: false, served: true, included: true},
    {pattern: 'js/jquery.validationEngine.js', watched: false, served: true, included: true},


    // fixtures
    {pattern: 'screens/AmountValidation.html', watched: true, served: true, included: false},
    {pattern: 'screens/DateValidation.html', watched: true, served: true, included: false},

    // files to test
    {pattern: 'js/amountTests.js', watched: true, served: true, included: true},
    {pattern: 'js/dateTests.js', watched: true, served: true, included: true}
];

// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['junit'];

junitReporter = {
    outputFile: 'test/testreport/e2e2.xml',
    suite: 'e2e2'
};

// web server port
port = 9876;



// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;

proxies = {
    '/web/': 'http://localhost:80/'
    // '/': 'E:/aqunit/demos/demoAmountAndDateValidation.html/'
    // '/': 'E:/aqunit/index.html/'

};
