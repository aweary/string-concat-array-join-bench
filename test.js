// Verify each function produces identical output before benchmarking
const assert = require('assert');
const renderWithArray = require('./array');
const renderWithString = require('./string');
const styles = require('./styles');

assert(renderWithArray(styles) === renderWithString(styles));