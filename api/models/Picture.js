/**
 * Picture.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fileName: {
      type: 'string',
      required: true
    },
    fileData: {
      type: 'binary',
      required: true
    },
    filePath: 'string',
    question: {
                model: 'question',
//                required: true
        }
  }
};

