let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = true;
let runnerAge = 99;
// check wheter the runner is an adult and registered early
if(runnerAge > 18 && earlyRunner){
  raceNumber += 1000;
}
// assigning their race timming
if(runnerAge > 18 && earlyRunner){
  console.log(`${raceNumber}, your race will be at 9:30 am`);
}
else if( runnerAge > 18 && !earlyRunner){
  console.log(`${raceNumber}, your race will be at 11:00 am`);
}
else if(runnerAge < 18){
  console.log(`${raceNumber}, your race will be at 12:30 pm`);
}
else{
  console.log(`${raceNumber}, see the registration desk`);
}
