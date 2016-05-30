/**
 * PassedTestAnswer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	passedTest:{
		model: 'passedTest',
		required: true
	},
	test: {
                model: 'test',
                required: true
        },
	question: {
                model: 'question',
		required: true
        },
	answer: {
                model: 'answer'
        },
	answerFree: 'string',
	isCorrect: {
		type: 'boolean',
		defaultsTo: false
	}
  }
};

