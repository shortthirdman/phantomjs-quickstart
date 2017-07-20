var page = require('webpage').create(),
  system = require('system'),
  t, address;
  
/* page.onConsoleMessage = function(msg) {
  console.log('Page title is ' + msg);
}; */

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>');
  phantom.exit();
}

t = Date.now();
address = system.args[1];
page.open(address, function(status) {
  var title = page.evaluate(function() {
    return document.title;
  });
  if (status !== 'success') {
    console.log('FAIL to load the address');
  } else {
    t = Date.now() - t;
	console.log('Title' : + title);
    console.log('Loading ' + system.args[1]);
    console.log('Loading time ' + t + ' msec');
  }
  phantom.exit();
});