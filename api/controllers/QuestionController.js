// function to create file from base64 encoded string
function base64_decode(base64str, file) {
//    console.log(base64str);
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    var fs = require('fs');
    var bitmap = new Buffer(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
//    console.log('******** File created from base64 encoded string ********');
}
/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
uploadPicture64: function (req, res) {
var uploadFolder = '.tmp/uploads/';
var uuid = require('uuid');
var filename = uuid.v4();
var fd = uploadFolder + filename;

base64_decode(req.param('picture'), fd);
    Question.update(req.param('id'), {

      // Generate a unique URL where the avatar can be downloaded.
     // pictureUrl: require('util').format('%s/question/picture/%s', sails.getB$

      // Grab the first file and use it's `fd` (file descriptor)
      pictureFd: fd
    })
    .exec(function (err){
      if (err) return res.negotiate(err);
      return res.ok();
    });

},

uploadPicture: function (req, res) {
//console.log(req.body);
//return 200;

  req.file('picture').upload({
    // don't allow the total upload size to exceed ~10MB
  //req.file().upload({
    maxBytes: 10000000
  },function whenDone(err, uploadedFiles) {
    if (err) {
      return res.negotiate(err);
    }

    // If no files were uploaded, respond with an error.
    if (uploadedFiles.length === 0){
      return res.badRequest('No file was uploaded');
    }


    // Save the "fd" and the url where the avatar for a user can be accessed
    Question.update(req.param('id'), {

      // Generate a unique URL where the avatar can be downloaded.
     // pictureUrl: require('util').format('%s/question/picture/%s', sails.getBaseUrl(), req.id),

      // Grab the first file and use it's `fd` (file descriptor)
      pictureFd: uploadedFiles[0].fd
    })
    .exec(function (err){
      if (err) return res.negotiate(err);
      return res.ok();
    });
  });
},


/**
 * Download avatar of the user with the specified id
 *
 * (GET /question/picture/:id)
 */
picture: function (req, res){

  req.validate({
    id: 'string'
  });

  Question.findOne(req.param('id')).exec(function (err, question){
    if (err) return res.negotiate(err);
    if (!question) return res.notFound();

    // Question has no avatar image uploaded.
    // (should have never have hit this endpoint and used the default image)
    if (!question.pictureFd) {
      return res.notFound();
    }

    var SkipperDisk = require('skipper-disk');
    var fileAdapter = SkipperDisk(/* optional opts */);

    // Stream the file down
    fileAdapter.read(question.pictureFd)
    .on('error', function (err){
      return res.serverError(err);
    })
    .pipe(res);
  });
}
	
};

