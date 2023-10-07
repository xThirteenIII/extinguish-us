window.onload = function(){

    addPicOfTheDayEvent();
    addClickOnImagesEvent();
    checkIfHazardous();
    changeFrameOnClick();
}

let asteroids = new Object();

let date = new Date();

// Adds 0 to the days or months with 1 cipher only
let currentDay = String(date.getDate()).padStart(2,'0');
let previousDay = String(date.getDate()-1).padStart(2,'0');
let currentMonth = String(date.getMonth()+1).padStart(2, "0");
let currentFullYear = String(date.getFullYear());
let currentYearLastTwoDigits = currentFullYear.substring(2,4);

let todayDate_YYMMDD = currentYearLastTwoDigits + currentMonth + currentDay;
let todayDate_YYYY_MM_DD = currentFullYear + "-" + currentMonth + "-" + currentDay;
let yesterdayDate_YYYY_MM_DD = currentFullYear + "-" + currentMonth + "-" + previousDay;


let api_key =  "Tx8dZAeM50keheK1spm3qEZiA8EPhXahNI98M5xG"
let asteroid_url = "https://api.nasa.gov/neo/rest/v1/feed?start_date="+yesterdayDate_YYYY_MM_DD+"&end_date="+todayDate_YYYY_MM_DD+"&api_key="+api_key;


function addPicOfTheDayEvent(){


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

function checkIfHazardous(){
  
  let request = new FetchRequest('GET', asteroid_url, "", "", null);

  request.Fetch().then(data=>{
    asteroidIsHazardous(data);
  })
}

function  asteroidIsHazardous(response){

  let hazardousCount = 0;

  for (const [key, value] of Object.entries(response)){
    if (key == "near_earth_objects"){
      for (const [key2, value2] of Object.entries(value)){
        if (key2 == todayDate_YYYY_MM_DD){
          value2.forEach(asteroid => {
            for (const [key3, value3] of Object.entries(asteroid)){
              if (key3 == "is_potentially_hazardous_asteroid" && value3 == true){
                
                hazardousCount++;
                let field = "asteroidName"+String(hazardousCount);
                asteroids[field] = asteroid.name;
                 
              }
            }
          })
        }
      }
    }
  }
  console.log(asteroids);
}

function changeFrameOnClick(){

  let wwd_btn = document.getElementById("wwd_btn");
  let contentFrame = document.getElementById("contentFrame");
  wwd_btn.addEventListener('click', ()=>{
    contentFrame.src = "../website-practice/html/index.html";
  });
}
