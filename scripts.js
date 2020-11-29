let search_item = '';
let countries;
const display = document.querySelector('[data-display]');
let searchInput = document.querySelector('.search-bar');
let searchItem = '';
let fetchApi=[];
let result,searchFilter;


searchInput.addEventListener('input', e => {
    search_item = e.target.value.toLowerCase();

    searchFilter=fetchApi.filter(item=>{
        return item.name.toLowerCase().includes(search_item);
    });

    fetchCountries(searchFilter);

});



const getApi = async() => {

    //  fetch countries data from api
    // create a parameter called result and attach the data returned from the api as a json object

    countries = await fetch('https://restcountries.eu/rest/v2/all');
    fetchApi= await countries.json();

    fetchCountries(fetchApi);

};

const fetchCountries = (val) => {

    result=val.map((country) => {


        //loop through the languages of each country
        let countryLanguages = country.languages.map((languages) => {
            return languages.name;
        });

        //loop through the currencies of each country
        let countryCurrency = country.currencies.map((currency) => {
            return currency.name;
        });


        return `
        <div class="card pad-1">
            <div class="card-img">
                <img src="${country.flag}" alt="${country.name}-flag">
            </div>

            <div class="card-text">
                <ul>
                    <li>name: ${country.name}</li>
                    <li>capital: ${country.capital}</li>
                    <li>languages: ${countryLanguages}</li>
                    <li>currency: ${countryCurrency}<li>
                    <li>code: ${country.callingCodes}</li>
                </ul>
            </div>
        </div>

        `;

    });
    display.innerHTML = result;

};

getApi();




