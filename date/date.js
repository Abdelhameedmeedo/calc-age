let inputYear = document.querySelector('.inputs .fullyear');
let inputMonth = document.querySelector('.inputs .fullmonth');
let inputDay = document.querySelector('.inputs .fullday');
let inputName = document.querySelector('.inputs .name');
let resultArea = document.querySelector('.result .re-area');
let resultName = document.querySelector('.result .re-name');
let button = document.querySelector('.inputs .calc');
var newDate = new Date(), 
    getYear = newDate.getFullYear(); //get year now
    getMonth = newDate.getMonth() + 1, //get correct month now
    getDay = newDate.getDate(); //get day now
  
    //event on button to calc birth
  button.addEventListener('click',()=>{
  let totalYear,totalMonth,totalDay,yearToInteger,monthToInteger,dayToInteger;
    
  //convert input [year,month,day] to integer
  yearToInteger   = parseInt(inputYear.value);
  monthToInteger  = parseInt(inputMonth.value);
  dayToInteger    = parseInt(inputDay.value);

  if(yearToInteger > 0 && monthToInteger > 0 && dayToInteger > 0){
    
    //result name
    resultName.innerHTML = "Hello " + inputName.value +" !";

    //calc year
    totalYear   = getYear - yearToInteger;
    
    //calc month
    totalMonth  = getMonth - monthToInteger;

    //calc day
    totalDay    = getDay - dayToInteger;

    resultArea.innerHTML = totalYear +" years "+ totalMonth +" month "+ totalDay +" day";

  }else{
    resultArea.innerHTML = "you inserted wrong number!";
    resultName.innerHTML = 'insert youe name !';
  }
})