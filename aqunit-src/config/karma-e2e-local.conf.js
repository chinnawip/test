//basePath = 'E:/aqunit/';
basePath = '../';

files = [
    QUNIT,
    QUNIT_ADAPTER,
    //'demos/demoAmountAndDateValidation.html',
    //'js/*.js'
    //'js/amountTests.js',
    'js/dateTests.js'
   // 'languages/*.js',
   // 'css/*.css'
];

// 'test/e2e/Record/HistoryList.js'

urlRoot ='/_karma_/';

//captureTimeout=60000;

autoWatch = false;

//browsers = ['PhantomJS'];
browsers = ['Chrome'];

//browsers = ['Firefox'];

singleRun = false;

logLevel = LOG_DEBUG;


proxies = {
  '/': 'http://localhost:9999/qtc/index.html'
  // '/': 'E:/aqunit/demos/demoAmountAndDateValidation.html/'
   // '/': 'E:/aqunit/index.html/'

};

reporters = [ 'progress'];

junitReporter = {
  outputFile: 'test/testreport/e2e1.xml',
  suite: 'e2e1'
};

