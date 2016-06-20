/* PassedTestController
 *
 * @description :: Server-side logic for managing passed tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


function isCorrectAnswer(currAns){

    Question.findOne(currAns.question).exec(function (err, quest) {
        
	qType = quest.answerType;

        cor = false;

        var qCorrAns = CorrectAnswer.find();
        qCorrAns.where({question: currAns.question});
        qCorrAns.exec(function afterFind(err, corrAnsws){

	    if(qType == "free"){
		if(corrAnsws[0] == undefined)
		    corr = false;
		else
		    corr = currAns.textanswer == corrAnsws[0].textanswer;
		currAns.isCorrect = corr;
		}
            else if(qType == "single"){
		if(corrAnsws[0] == undefined)
		    corr = false;
		else
		    corr = (currAns.answer == corrAnsws[0].answer);
		currAns.isCorrect = corr;
                }
            else if(qType == "multi"){
		corr = false;
		for(i=0;i<corrAnsws.lenght;i++){
            	    corr = corr || currAns.answer == corrAnsws.answer;
		}
    		currAns.isCorrect = corr;
		}
            PassedTestAnswer.create(currAns).exec(function createC(err_a, created_a){
                });
            });
        });
}



module.exports = {

    create: function (req, res){
        header = req.body.header;
        answers = req.body.answers;

        PassedTest.create(header).exec(function createCB(err_t, created_t){

                for(i=0; i<answers.length;i++)
                    {
                    currAns = answers[i];
                    currAns.passedTest = created_t.id;
                    isCorrectAnswer(currAns);
                    //PassedTestAnswer.create(answers).exec(function createCB(err_a, created_a){
                        //});
		    jsn = JSON.stringify(created_t);
		    res.end(jsn);
                    //res.jsonp(created_t);
		    }
        });
    },

    getResult: function(req, res){
	p_id = req.param('id');
	
	quest = 0;
	cquest = 0;
	
	var qAns = PassedTestAnswer.find();
	qAns.where({passedTest: p_id});
	qAns.exec(function afterFind(err, answers){
	    console.log(answers);
	    for(i = 0; i< answers.length; i++){
		quest++;
		cquest = cquest + (answers[i].isCorrect ? 1 : 0);
	    }
	    res.json({"allQuestions": quest, "correctAnswers" : cquest, "executionPercentage": cquest/quest*100});
        });
    }
};

