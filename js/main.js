const country_inp = document.getElementById("inp");
const subbtn = document.getElementById("submit") ;

subbtn.addEventListener("click" , ()=>{
    let countryname = country_inp.value ;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryname}?fullText=true`
    console.log(finalUrl);

   

    fetch(finalUrl)
    .then( (respones) => respones.json())
    .then( (data)=>{

      console.log(data)
          result.innerHTML = `
          
          <img src="${data[0].flags.svg}" alt="" class="flag-img">
          <h2>${data[0].name.common}</h2>  

          <ul>
           <li>Captial : <span>${data[0].capital[0]}</span> </li>
           <li> Population : <span>${data[0].population}</span></li>
           <li> Currency : <span>${Object.keys(data[0].currencies)[0]}</span></li>
           <li> Population : <span>${Object.values(data[0].languages)}</span></li>
          </ul>
          `
      })

      .catch(()=>{
         if(countryname.length == 0 ){
            result.innerHTML = `
             <h2>The Input feild cannot be empty </h2>
            `
         }
         else{
            result.innerHTML = `
            <h2> Please enter a valid country </h2>
           `
         }
      })
})