###
 * # log.js
 *
 * This file contains logging function.
 *
 * @author Charles Bourasseau <charles.bourasseau@gmail.com>
 * @version 0.0.1
 * @deprecated
###

###!
 * Ignored comment
###

###
 * This method log a given message to the console.
 *
 * h3 Examples:
 *
 *     log('It works!');
 *
 * @param {String} message The message to log
 * @return {Boolean} True if it success, false if not
 * @see console.log()
 * @name helloWorld
 * @method
###
log = (message) ->
  # comment
  try
    console.log message
    return true
  catch e
    ###!
     * Ignored comment
    ###
    return false