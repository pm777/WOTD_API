var mongoose = require('mongoose'),
  Word = mongoose.model('words');
  const dateTime = require('node-datetime');


  exports.get_word_day = function(req, res) {
  today = dateTime.create();

  Word.findById(today, function(err, word) {
    if (err)
      res.send(err);
    res.json(word);
  });
};


exports.add_a_word = function(req, res) {
  var new_word = new Word(({
		word: req.body.word,
		meaning: req.body.meaning,
		created_date:req.body.date
	});
    new_word.save(function(err, word) {
    if (err)
      res.send(err);
    res.json(word);
  });
};


exports.update_a_word = function(req, res) {
  Task.findOneAndUpdate({word: req.body.word},{ $set: {word: req.body.word,
													   meaning: req.body.meaning,
												       created_date:req.body.date}},
												       {new: true}, function(err, word) {
    if (err)
      res.send(err);
    res.json(word);
  });
};


exports.delete_a_word = function(req, res) {


  Word.remove({
    word: req.body.word
  }, function(err, word) {
    if (err)
      res.send(err);
    res.json({ message: 'Word successfully deleted' });
  });
};