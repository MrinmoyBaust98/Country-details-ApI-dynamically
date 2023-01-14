function loadCountry(){
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => displayCountry(data))
}
loadCountry();

function displayCountry(countries){

    const showfield=document.getElementById("short-details");
    for(const country of countries){

        // console.log(country.name , country.capital);
         const div=document.createElement('div');
         div.innerHTML=`
         
         <h3> Name: ${country.name} </h3>
         <h4> Capital:  ${country.capital} </h4>
         <button onclick="show('${country.name}')"> Details</button>

         `;
         showfield.appendChild(div);

         div.classList.add("div-style");
    }
    
}
 function show(name){
    const url=`https://restcountries.com/v2/name/${name}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => showDetails(data) )
 }

 function showDetails(details){

    for(const detail of details){

        const div=document.getElementById("full-details");
         div.innerHTML=`
         
         <h4> Area: ${detail.area} </h4>
         <h4> Population: ${detail.population} </h4>
         <h4> Native_Name: ${detail.nativeName} </h4>
         <h4> Region: ${detail.region} </h4>
         <img width="200px" src="${detail.flag}">
         
         `;
         
    }
 }



