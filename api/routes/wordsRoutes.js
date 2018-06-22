module.exports = function(app) {
  var wordList = require('../controllers/wordsController');

  // wordList Routes
  app.route('/wordoftheday')
    .get(wordList.get_word_day)
    .post(wordList.get_word_day);


  app.route('/words')
  	.post(wordList.add_a_word)
    .put(wordList.update_a_word)
    .delete(wordList.delete_a_word);
};
