window.onload = function(){

    addPicOfTheDayEvent();
    addClickOnImagesEvent();
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
    
        window.open('https://apod.nasa.gov/apod/ap'+ todayDate_YYMMDD +'.html', '_blank');
    })
}

function addClickOnImagesEvent(){

    let vladimiroDiv = document.getElementById("vladimiro");
    vladimiroDiv.addEventListener('click', function(){

        window.open('https://en.wikipedia.org/wiki/Vladimir_Putin', '_blank')
    });

    let yourMomDiv = document.getElementById("yourMom");
    yourMomDiv.addEventListener('click', function(){

        window.open('https://en.wikipedia.org/wiki/Parent', '_blank')
    });

    let yourBossDiv = document.getElementById("yourBoss");
    yourBossDiv.addEventListener('click', function(){

        window.open('https://en.wikipedia.org/wiki/Supervisor', '_blank')
    });

    let yourPartnerDiv = document.getElementById("yourPartner");
    yourPartnerDiv.addEventListener('click', function(){

        window.open('https://en.wikipedia.org/wiki/On-again,_off-again_relationship', '_blank')
    });
}