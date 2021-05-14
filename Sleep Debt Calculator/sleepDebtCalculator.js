const getSleepHours = day =>{
    switch(day){
      case 'monday' :
        return 8;
        break;
        default :
        return Math.floor(Math.random()*12);
        break;
    }
  };
  const getActualSleepHours = () =>{
    let totalSleep = getSleepHours('monday') + getSleepHours('tuesday') +
    getSleepHours('wednesday') + getSleepHours('thursday') +getSleepHours('friday')+getSleepHours('saturday') + getSleepHours('sunday');
    return totalSleep;
  };
  const getIdealSleepHours = () =>{
    return 7*7;
  };
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
      console.log('User got perfect amount of sleep');
    } else if(actualSleepHours > idealSleepHours){
      console.log(`User got ${actualSleepHours - idealSleepHours} more sleep than needed`);
    } else{
      console.log('User should get more sleep');
    }
  };
  calculateSleepDebt();