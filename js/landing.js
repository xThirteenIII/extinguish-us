window.onload = function(){

    addPicOfTheDayEvent();
}

function addPicOfTheDayEvent(){

    let date = new Date();

    // Adds 0 to the days or months with 1 cipher only
    let currentDay = String(date.getDate()).padStart(2,'0');
    let currentMonth = String(date.getMonth()+1).padStart(2, "0");
    let currentYear = String(date.getFullYear()).substring(2,4);

    let todayDate_YYMMDD = currentYear + currentMonth + currentDay;

    let picOfTheDayBtn = document.getElementById("picOfTheDay");
    picOfTheDayBtn.addEventListener('click', ()=>{
    
        window.open('https://apod.nasa.gov/apod/ap'+ todayDate_YYMMDD +'.html');
    })
}