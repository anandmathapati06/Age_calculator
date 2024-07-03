
let link = document.getElementById("icon");

let sec = document.getElementsByTagName("section")
let year = document.getElementById("year")
let month = document.getElementById("month")
let day = document.getElementById("day")
let user = document.getElementById("user")
let button = document.querySelector(".btn")
 

    let currentdate = new Date();
    
    
    
    
    user.max = `${currentdate.getFullYear()}-${(currentdate.getMonth()<10)?  '0'+ currentdate.getMonth() : currentdate.getMonth()}-${(currentdate.getDate()<10)?  '0' + currentdate.getDate() : currentdate.getDate()}`
    

    
    button.addEventListener("click",()=>{
    let dates = user.value.split("-")
console.log(dates[0],dates[1],dates[2]);

    console.log(user.value)
        if(user.value === ""){
             alert("select the date")
           window.location.reload() 
        }

console.log(currentdate.getFullYear());

  let  yearvalue = currentdate.getFullYear()  -  dates[0] ;
   let  monthvalue = currentdate.getMonth()  - dates[1] ; console.log(currentdate.getMonth(),dates[1] );
   let dayvalue = currentdate.getDate()  - dates[2] ;
   if(dayvalue < 0  ){

    monthvalue--
    dayvalue = dayvalue + 31
    }else{
       monthvalue++ 
    }
    if(monthvalue < 0){
        yearvalue--
        monthvalue = monthvalue + 12
        
    }
    
    



    year.innerText = yearvalue
    month.innerText = monthvalue
    day.innerText = dayvalue
})









