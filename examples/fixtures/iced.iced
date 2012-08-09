###
 *  Search on Twitter with a single keyword 
 *
 * @param {String} keyword The keyword
 * @param {Function} callback The callback function with arguments (result).
 * @name search
###
search = (keyword, cb) ->
  host = "http://search.twitter.com/"
  url = "#{host}/search.json?q=#{keyword}&callback=?"
  await $.getJSON url, defer json
  cb json.results