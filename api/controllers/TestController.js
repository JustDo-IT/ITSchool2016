/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function pgFormatDate(date) {
  /* Via http://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date */
  function zeroPad(d) {
    return ("0" + d).slice(-2)
  }

//  var parsed = new Date(date)
  var parsed = date

  return [parsed.getUTCFullYear(), zeroPad(parsed.getMonth() + 1), zeroPad(parsed.getDate()), zeroPad(parsed.getHours()), zeroPad(parsed.getMinutes()), zeroPad(parsed.getSeconds())].join(" ");
}

module.exports = {
 available: function (req, res) {

        var myQuery = Test.find();
	var d = new Date();
	var n = d.toISOString();
        myQuery.where({'isPublic':true,
//or:[{'endDate':{'>':pgFormatDate(new Date())}},{'endDate':null}],
or:[{'endDate':{'>':n}},{'endDate':null}],
//or:[{'startDate':{'<':new Date()}},{'startDate':null}],
//'endDate':{'>':n},
'isHidden':false
});
        myQuery.exec(function afterFind(err, tests)
	{
        	if(err) return "";
	        else 
	{
		for(var i = 0; i < tests.length; i++) {
		    delete tests[i]['createdAt'];
		    delete tests[i]['updatedAt'];
		    delete tests[i]['isHidden'];
		    delete tests[i]['isPublic'];
		}
		return res.jsonp(tests);
}
});
}	
};
