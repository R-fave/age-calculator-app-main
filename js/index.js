const birthDay = document.getElementById("day")
const birthMonth = document.getElementById("month")
const birthYear = document.getElementById("year")
const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth()+1
const currentDay = new Date().getDate()
let yearDiff = ""
let monthDiff = ""
let dayDiff = ""





function handleClick(){
    validationCheck()

    
}

function validationCheck(){

    const daysInCurrentMonth = new Date(currentYear, birthMonth.value, 0).getDate()
    console.log(daysInCurrentMonth)
    
    if (birthDay.value > daysInCurrentMonth || !birthDay.value){
        document.getElementById("day-validator").textContent = "This field is required"
        birthDay.style = "border-color: hsla(0, 100%, 67%, 0.4); transition-timing-function: ease-in-out; transition-duration: 1s; "
        document.getElementById("day-label").classList.add("invalid") 
    }
    
    else if (!birthMonth.value || birthMonth.value > 12 ){
        document.getElementById("month-validator").textContent = "This field is required"
        birthMonth.style= "border-color: hsla(0, 100%, 67%, 0.4); transition-timing-function: ease-in-out; transition-duration: 1s; "
        document.getElementById("month-label").classList.add("invalid") 

    }

    else if (!birthYear.value || birthYear.value > currentYear){
        document.getElementById("year-validator").textContent = "This field is required"
        birthYear.style = "border-color: hsla(0, 100%, 67%, 0.4); transition-timing-function: ease-in-out; transition-duration: 1s; "
        document.getElementById("year-label").classList.add("invalid") 
    }

    else{
        birthMonth.style.borderColor = 
        birthDay.style.borderColor = 
        birthYear.style.borderColor = 
        document.getElementById("month-validator").textContent = ""
        document.getElementById("day-validator").textContent = ""
        document.getElementById("year-validator").textContent = ""
        document.getElementById("month-label").classList.remove("invalid") 
        document.getElementById("day-label").classList.remove("invalid") 
        document.getElementById("year-label").classList.remove("invalid")
    
        getYear()
    }
}


function getYear(){

    if( currentMonth < birthMonth.value){
        yearDiff = currentYear - birthYear.value - 1
        monthDiff = currentMonth + 12 - birthMonth.value
        dayDiff = currentDay - birthDay.value
    }
    else if  (currentDay < birthDay.value){
        const daysInMonth = new Date(currentYear, currentMonth-1, 0).getDate()
        yearDiff = currentYear - birthYear.value
        monthDiff= currentMonth - birthMonth.value - 1
        dayDiff = currentDay + daysInMonth - birthDay.value
    }
    else if (currentDay < birthDay.value && currentMonth < birthMonth.value){
        const daysInMonth = new Date(currentYear, currentMonth - 1, 0).getDate()
        yearDiff = currentYear - birthYear.value - 1
        monthDiff = currentMonth + 12 - birthMonth.value - 1
        dayDiff = currentDay + daysInMonth - birthDay.value

    }
    else{
        yearDiff = currentYear - birthYear.value
        monthDiff = currentMonth - birthMonth.value
        dayDiff = currentDay - birthDay.value
    }

    // console.log(yearDiff)
    // console.log(monthDiff)
    // console.log(dayDiff)

    document.getElementById('year-diff').textContent = yearDiff
    document.getElementById('month-diff').textContent = monthDiff
    document.getElementById('days-diff').textContent = dayDiff


    
}
