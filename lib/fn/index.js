'use strict'

var _ = require('lodash')

exports.Fn = _.assign(
  require('./map'),
  require('./set')
)
