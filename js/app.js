/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
var count = document.getElementById("matCount");
count.innerHTML = 11;
//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
var mCount = document.getElementById("msgCount");
mCount.innerHTML = 23;
//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
var fullName = document.getElementById("fullname");
fullName.innerHTML = "Ronald McDonald";
//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
var age = document.getElementById('age');
age.innerHTML = 63;
//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var job = document.createElement("div");
job.id = 'job';
job.innerHTML = "Clown and Restauranteur";
data.appendChild(job); 
//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var hobbies = document.createElement('div');
hobbies.id = 'hobbies';
hobbies.innerHTML = "Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.";
data.appendChild(hobbies);
//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var locations = document.createElement('div');
locations.id = 'location';
locations.innerHTML = "Honolulu, HI";
data.appendChild(locations);
//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var wants = document.createElement('div');
wants.id = 'wants';
wants.innerHTML ='Looking for a Mrs. McDonald';
data.appendChild(wants);
//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var pro2 = document.createElement('p');
pro2.id = 'pro2';
pro2.innerHTML = 'I like my burgers like I like my women, juicy and fat. I also like star gazing.';
profile.appendChild(pro2); 

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var newName = document.getElementsByClassName('firstName');
newName[0].innerHTML = 'Wendy';

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
var newAge = document.getElementsByClassName('otherAge');
newAge[0].innerHTML = 48;
//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var newStatus = document.getElementsByClassName('status');
newStatus[0].innerHTML = 'Single Mother';
//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
newName[1].innerHTML = 'Peko Chan';
//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
newAge[1].innerHTML = 68;
 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto
 var newMotto = document.getElementsByClassName('motto');
 newName[2].innerHTML = 'Person';
 newAge[2].innerHTML = 12;
 newStatus[2].innerHTML = 'Single';
 newMotto[2].innerHTML = 'Grab life by the balls';
 var newImg = document.getElementsByClassName('other');
 newImg[2].src="https://pbs.twimg.com/profile_images/653700295395016708/WjGTnKGQ.png"
// var profile = document.createElement('div');
// var profileName = document.createElement('div');
// profileName.innerHTML = 'Name';
// var profileAge = document.createElement('div');
// profileAge.innerHTML = 12;
// var profileStatus = document.createElement('div');
// profileStatus.innerHTML = 'Single';
// var profileMotto = document.createElement('div');
// profileMotto.innerHTML = 'Grab life by the balls';




