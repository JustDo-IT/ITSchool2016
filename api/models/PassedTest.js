/**
 * PassedTest.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	fName:{
		type: 'string',
		required: true
	},
	sName:{
                type: 'string',
                required: true
        },
	phone:{
                type: 'string',
                required: true
        },
	email:{
                type: 'string',
                required: true
        },
	answers: {
		collection: 'passedTestAnswer',
		via: 'passedTest'
	}

  }
};

