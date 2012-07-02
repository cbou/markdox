
###*
 * Parse tag type string "{Array|Object}" etc.
 *
 * @name is arbitrary
 * @param {String} str
 * @return {Array}
 * @api public
 ###
exports.parseTagTypes = (str) ->
  str
    .replace(/[{}]/g, "")
    .split RegExp(" *[|,\\/] *")