/**
 * Question.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

        description: {
                type: 'string',
                required: true
        },
/*	picture: {
		type: 'picture'
	},
*/
        picture: {
                collection: 'picture',
                via: 'question'
        },

	answerType: {
		type: 'string',
                required: true,
		enum: ['single', 'multi', 'free']
	},
        isHidden: {
                type: 'boolean',
                defaultsTo: false
        },
        answers: {
                collection: 'answer',
                via: 'question'
        },
	test: {
		model: 'test',
                required: true
 	},
	pictureFd: 'string'

  }
};

