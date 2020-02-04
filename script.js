let firstAnswer;
let secondAnswer;
let thirdAnswer;
let name;
let total;
let week=7;


   


$(".calTotal").click(function(){
firstAnswer=$(".answerOne").val();
secondAnswer=$(".answerTwo").val();
thirdAnswer=$(".answerThree").val();
name=$(".answerZero").val();
      total= (Number(firstAnswer) + Number(secondAnswer) + Number(thirdAnswer))*week;
      if(total>=25){
          $(".result").html(`${name},you'll waste ${total} hours this week! What is you doin?`);
          $(".wasteMuch").show();
      }
      else{
          $(".result").html(`<p>${name},   you'll waste just ${total} hours this week! You have your priorities straight! Look at you!</p>`);
          $(".wasteLittle").show();
      }
      
});
