let userName = prompt("enter her/his name");


let gender = prompt("enter her/his gender");
if (gender != 'male'&&'female') {
  alert("the gender is incorrect")

}


let age= prompt("enter her/his age");
if (age <= 0 ){
  alert(" your age incoorect ");

}



   
let askuser = prompt ("did u wants to skip the welcoming message.");
if(askuser == 'yes'){
 
}
else if (askuser =='no' && gender=='male'){
  alert('welcome MR' + '  '+userName);

}
else if (askuser =='no' && gender=='female'){
  alert('welcome MS' + '  '+userName);
}
else {
  alert('welcome');
}


