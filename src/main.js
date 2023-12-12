const form=document.querySelector('.form')
const age=document.querySelector('.age')
const result=document.querySelector('.result')
let newDate=new Date()
let currentYear=newDate.getFullYear()
let currentMonth=newDate.getMonth()
let currentDay=newDate.getDate()

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let ageValueYear=age.value.slice(0, 4)-0
    let ageMonth=age.value.slice(5, 7)-1
    let ageDays=age.value.slice(8)-0
//    result.innerHTML=` <h3 class="result text-center font-sans text-2xl font-semibold">Your age is ${currentYear-ageValue} years old</h3>`
let resultDay1
let resultMonth
if (currentDay>ageDays) {
    resultDay1 =currentDay-ageDays
} else {
  resultDay1=(currentDay+30)-ageDays
currentMonth-1
}
if (currentMonth>ageMonth) {
    resultMonth=currentMonth-ageMonth
} else {
  resultMonth=(currentMonth+12)- ageMonth 
  currentYear-1
}

let ageFull=(currentYear-ageValueYear)
let ageKabisa=Math.floor((currentYear-ageValueYear)/4)
let days=(ageFull-ageKabisa)*365+ageKabisa*366+resultMonth*30+resultDay1

result.innerHTML=` <h3 class="result text-center font-sans text-2xl font-semibold">Your have been living from ${days} days</h3>`
})