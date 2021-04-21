const p = document.querySelector("p");
const button1 = document.querySelector(".btn1");
const container= document.querySelector(".container");
const button2 = document.getElementById("output");

// const userInputValue = userInput.value;
const currentYear = new Date().getFullYear();
const h3 = document.querySelector("show");

p.addEventListener("click",function(){
    container.style.display = "none";
});

button1.addEventListener("click", function(){
    const userInput = document.getElementById("year").value;
    const h3 = document.querySelector("#show");
       if(userInput == "" || userInput <= 0){
           alert("Please enter a correct age");
           return;
       }
       const currentYear = new Date().getFullYear();
       const birthYear = currentYear - userInput;
       h3.innerHTML =  "Your year of birth is " + birthYear;
       container.style.display = "block";
    
   
});

button2.addEventListener("click",function(){
   const date1 = document.getElementById("date1").value;
   const date2 = document.getElementById("date2").value;
   const h3 = document.querySelector("#show");
   let dob = new Date(date1);
   let month = dob.getMonth()+1;
   let day = dob.getDate();
   let year = dob.getFullYear();
//    alert(day);
// current date
 if(date1 == "" || date2 == ""){
     alert("Fill all fields");
 }else{
    let curdate = new Date(date2);
    let curMonth = curdate.getMonth() +1;
   let curDay = curdate.getDate();
   let curYear = curdate.getFullYear();

    // alert(curMonth);

    newMonth = Math.abs(curMonth - month);
    newYear = Math.abs(curYear - year);
    newDay = Math.abs(curDay - day);
    // alert(newMonth);

    h3.innerHTML =  "You are " + newYear + "year(s), "+ newMonth + "month(s) and, " + newDay+"day(s) old"  ;
    container.style.display = "block";

 }
  

    
    
})


