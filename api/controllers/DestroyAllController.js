/**
 * DestroyAllController
 *
 * @description :: Server-side logic for managing destroyalls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
 rundestroy: function (req, res) {
        Test.destroy({}).exec(function (err){
                  if (err) {
                    return res.negotiate(err);
                  }
                  sails.log('Any tests have now been deleted!'); 
                 return res.ok();
        });
        Question.destroy({}).exec(function (err){
                  if (err) {
                    return res.negotiate(err);
                  }
                  sails.log('Any questions have now been deleted!');
                 return res.ok();
        });
        Answer.destroy({}).exec(function (err){
                  if (err) {
                    return res.negotiate(err);
                  }
                  sails.log('Any answers have now been deleted!');
                 return res.ok();
        });
        Picture.destroy({}).exec(function (err){
                  if (err) {
                    return res.negotiate(err);
                  }
                  sails.log('Any pictures have now been deleted!');
                 return res.ok();
        });
        CorrectAnswer.destroy({}).exec(function (err){
                  if (err) {
                    return res.negotiate(err);
                  }
                  sails.log('Any correct answer have now been deleted!');
                 return res.ok();
        });

  }
}
