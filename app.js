
let userName = prompt("enter her/his name");
let gender = prompt("enter her/his gender");
if (gender != 'male' && 'female') {
  alert("the gender is incorrect")
}
let age = prompt("enter her/his age");
if (age <= 0) {
  alert(" your age incoorect ");

}
let askuser = prompt("did u wants to skip the welcoming message.");
if (askuser == 'yes') {

}
else if (askuser == 'no' && gender == 'male') {
  alert('welcome MR' + '  ' + userName);

}
else if (askuser == 'no' && gender == 'female') {
  alert('welcome MS' + '  ' + userName);
}
else {
  alert('welcome');
}

/*-------------------------lap 06 -----------------------------*/


function answerQuestion(answer){

  if (answer == ""){
    return "invalid string";
  }
  return answer;
 
 }
 let userAsk = prompt("do you practise js");
 let userAsk2 = prompt("do you feel this course improve your skills");
 let userAsk3 = prompt("do you spent 5 hours every day to study");

 console.log('the answer 1 '+ answerQuestion(userAsk));
 console.log('the answer 2 '+ answerQuestion(userAsk2));
 console.log('the answer 3 '+ answerQuestion(userAsk3));


 


