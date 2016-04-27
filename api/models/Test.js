/**
 * Test.js
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
	isPublic: {
		type: 'boolean',
		defaultsTo: true
	},
	startDate: {
	type: 'datetime',
	defaultsTo: null
 	},
	endDate:{
        type: 'datetime',
	defaultsTo: null
        },
	isHidden: {
		type: 'boolean',
                defaultsTo: false
	},
	questions: {
		collection: 'question',
		via: 'test'
	}
  }
};

