/**
 * PassedTestController
 *
 * @description :: Server-side logic for managing passed tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function isCorrect(t_id, q_id, a_id, a_free){

    isCorrect = false;

    Question.findOne(q_id).exec(function (err, quest) {
	qType = quest.answerType;

	var qCorrAns = CorrectAnswer.find();
	qCorrAns.where({question: q_id});
	qCorrAns.exec(function afterFind(err, corrAnsws){
	    if(qType == "free")
		return a_free == corrAnsws[0].textanswer;
	    else if(qType == "single")
		return a_id == corrAnsws[0].answer.id;
	    else if(qType == "multi")
		for(i=0;i<corrAnsws.lenght;i++)
		    isCorrect = isCorrect || a_id == corrAnsws.answer.id;
	    });    
	});
    return isCorrect;
}



module.exports = {
    
    create: function (req, res){
	header = req.body.header;
	answers = req.body.answers;

	PassedTest.create(header).exec(function createCB(err_t, created_t){
	
		for(i=0; i<answers.length;i++)
		    {
		    currAns = answer[i];
		    currAns.passedTest = created_t.id;
		    currAns.isCorrect  = isCorrect(currAns.test, currAns.question, currAns.answer, currAns.answerFree);
	
		    PassedTestAnswer.create(answers).exec(function createCB(err_a, created_a){
			});
	
		    res.end(JSON.stringify(created_t));
		    }
	});
    }
};