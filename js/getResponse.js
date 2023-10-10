window.onload = function(){
    checkIfHazardous();
}

let asteroidInfoArray = [];

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
//let asteroid_url = "https://api.nasa.gov/neo/rest/v1/feed?start_date="+yesterdayDate_YYYY_MM_DD+"&end_date="+todayDate_YYYY_MM_DD+"&api_key="+api_key;
let asteroid_url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-10-07&end_date=2023-10-08&api_key="+api_key;

function checkIfHazardous(){
  
  let request = new FetchRequest('GET', asteroid_url, "", "", null);

  request.Fetch().then(data=>{
    asteroidIsHazardous(data);
  })
}

function  asteroidIsHazardous(response){
  console.log(response);

  let hazardousCount = 0;

  for (const [key, value] of Object.entries(response)){
    if (key == "near_earth_objects"){
      for (const [key2, value2] of Object.entries(value)){
        if (key2 == "2023-10-07"){
          value2.forEach(asteroid => {
            for (const [key3, value3] of Object.entries(asteroid)){
              if (key3 == "is_potentially_hazardous_asteroid" && value3 == true){
                
                hazardousCount++;

                let hazardousObject = new Object();
                hazardousObject = asteroid;

                asteroidInfoArray.push(hazardousObject);

                //let field = "asteroidName"+String(hazardousCount);
                //asteroids[field] = asteroid.name;
              }
            }
          })
        }
      }
    }
  }
  fillAsteroidInfo();

  if (asteroidInfoArray.length > 0){
        let title = document.getElementsByClassName("line");
        for(let i = 0; i < title.length; i++) {
            title[i].textContent = "YeS We DIe";
        }
  }else{
        let title = document.getElementsByClassName("line");
        for(let i = 0; i < title.length; i++) {
            title[i].textContent = "We Don'T DIe TodAy :(";
        }
        return
  }

  if (asteroidInfoArray.length > 1){
    spawnNextAndPreviousBtn();
  }
}

function fillAsteroidInfo(){


        let name = document.getElementById("name");
        name.previousElementSibling.textContent = "Asteroid name /// ";
        name.textContent =asteroidInfoArray[0].name;

        let id = document.getElementById("id");
        id.previousElementSibling.textContent = "Id /// ";
        id.textContent = asteroidInfoArray[0].id;

        let distance_from_earth = document.getElementById("distance_from_earth");
        distance_from_earth.previousElementSibling.textContent = "Distance from Earth /// ";
        distance_from_earth.textContent = parseFloat(asteroidInfoArray[0].close_approach_data[0].miss_distance.astronomical).toFixed(4)+" [au]";

        let estimated_diameter = document.getElementById("diameter");
        estimated_diameter.previousElementSibling.textContent = "Estimated max diameter /// ";
        estimated_diameter.textContent = parseFloat(asteroidInfoArray[0].estimated_diameter.kilometers.estimated_diameter_max).toFixed(4)+" [km]";

        let orbiting_body = document.getElementById("orbiting_body");
        orbiting_body.previousElementSibling.textContent = "Orbiting body /// ";
        orbiting_body.textContent = asteroidInfoArray[0].close_approach_data[0].orbiting_body;

        let relative_velocity = document.getElementById("relative_velocity");
        relative_velocity.previousElementSibling.textContent = "Relative velocity /// ";
        relative_velocity.textContent = parseFloat(asteroidInfoArray[0].close_approach_data[0].relative_velocity.kilometers_per_second).toFixed(4)+" [km/s]";

}

function spawnNextAndPreviousBtn(){
    
    let buttons = document.getElementById("buttons");
    let next_btn = document.createElement("button");
    let previous_btn = document.createElement("button");
    next_btn.textContent = "next_threat";
    next_btn.style = "flex: 0 1 0;"
    previous_btn.textContent = "previous_threat";
    previous_btn.style = "flex: 0 1 0;"
    buttons.appendChild(next_btn);
    buttons.appendChild(previous_btn);

    addButtonFunctionalities(next_btn, previous_btn);
}

function addButtonFunctionalities(next_btn, previous_btn){

    next_btn.addEventListener('click', ()=>{

        
    });
}