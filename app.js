let user1 = prompt("enter her/his name");
console.log('my name is >>>>>', user1);

let user2 = prompt("enter her/his gender");
if(user2 == 'male' ){

    console.log('my gender is ',user2);
}
  else if (user2 == 'female'){
    
 console.log('my gender is',user2)}
else {
alert ('the gender is incorrect');}

let user3= prompt("enter her/his age");
if(user3 > 0 ){

console.log('my age is >>>' , user3);}
 else {
   alert("you enter incorrect age");}

   
let askuser = prompt ("did u wants to skip the welcoming message.");
if(askuser == 'yes'){
 
}
else if (askuser =='no' && user2=='male'){
  alert('welcome MR' + '  '+user1);

}
else if (askuser =='no' && user2=='female'){
  alert('welcome MS' + '  '+user1);
}
else {
  alert('welcome');
}


