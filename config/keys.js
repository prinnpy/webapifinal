//keys.js

//figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
    //in productions
    module.export = require('./prod');
} else {
    //in dev
    modules.exports = require('./dev');
}