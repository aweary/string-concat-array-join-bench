var Benchmark = require('benchmark');
var styles = require('./styles');
var renderAttributesWithArray = require('./array');
var renderAttributesWithString = require('./string');

var suite = new Benchmark.Suite;



suite.add('Array.push + Array.join', () => {
  var parsed = renderAttributesWithArray(styles);
  var rendered = `<div ${parsed}></div>`
})
.add('String concat', () => {
  var parsed = renderAttributesWithString(styles);
  var rendered = `<div ${parsed}></div>`
})
.on('cycle', (event) => {
  console.log(String(event.target))
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run();