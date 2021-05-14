let input = 'a whale of a deal!';
let vowels = ['a','e','i','o','u'];
let resultArray = [];
let length=0;
for(let i = 0; i < input.length; i++ ){
  //length++;
  for(let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      if(input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i],input[i]);
      }
      else{
        resultArray.push(input[i]);
      }
    }
  }
}
console.log(resultArray.toString());