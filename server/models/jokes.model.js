const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    jokeString: {
        type: String
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;