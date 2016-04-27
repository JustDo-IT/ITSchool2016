/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
 available: function (req, res) {

        var myQuery = Test.find();
	var d = new Date();
	var n = d.toISOString();
	var isAdmin = req.param('isAdmin');
	if(isAdmin == 1)
        myQuery.where({
                'isHidden':false
		});
	else
        myQuery.where({'isPublic':true,
		or:[{'endDate':{'>':n}},{'endDate':null}],
		//'endDate':{'>':n},
		'isHidden':false,
		//or:[{'startDate':{'<':n}},{'startDate':null}]
		});
        myQuery.exec(function afterFind(err, tests)
	{
        	if(err) return "";
	        else 
	{
		for(var i = 0; i < tests.length; i++) {
		   // delete tests[i]['createdAt'];
		   // delete tests[i]['updatedAt'];
		    delete tests[i]['isHidden'];
		  //  delete tests[i]['isPublic'];
		}
		return res.jsonp(tests);
}
});
}	
};
