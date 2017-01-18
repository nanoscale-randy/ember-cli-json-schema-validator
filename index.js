/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-json-schema-validator'
  included: function (app) {
    this._super.included.apply(this, arguments);
    app.import(app.bowerDirectory + '/jjv/lib/jjv.js');
  }
};
