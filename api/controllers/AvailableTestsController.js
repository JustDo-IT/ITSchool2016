/**
 * AvailableTests
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
 test: function (req, res) {

	var myQuery = Test.find();
	myQuery.where({'isPublic':true, 
or:[{'endDate':{'>':new Date()}},{'endDate':NaN}]});
	myQuery.exec(function afterFind(err, tests)
{
	if(err) return "";
	else return res.jsonp(tests);
});
  }

};


