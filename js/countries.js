
const loadCountries =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=>displayCountries(data) )
}
 const displayCountries= country=>{
    
    const container = document.getElementById('all-countries');

    country.forEach(countries => {
        console.log(countries.cca2);
        
        const countryDiv =document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML=`
        <h1> Name:${countries.name.common}  </h1>
        <p>capital:${countries.capital ? countries.capital[0]: 'no capital'} </p>
        <button onclick="displayCountryDetail('${countries.cca2}')">Details </button>
        `;

        container.appendChild(countryDiv);
    });

    


 }
 const displayCountryDetail =code => {
   const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]))
 }

  const showCountryDetails = flag=>{
    const details =document.getElementById("country-details");
    details.innerHTML=`
     <h3> Name: ${flag.name.common} </h3>
     <img src="${flag.flags.png}" />
    `
  }

loadCountries();