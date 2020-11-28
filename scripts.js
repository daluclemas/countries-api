let search_item = '';
let countries;
const display = document.querySelector('[data-display]');
let searchInput = document.querySelector('.search-bar');
let searchItem = '';



const getApi = async() => {

    //  fetch countries data from api
    // create a parameter called result and attach the data returned from the api as a json object

    countries = await fetch('https://restcountries.eu/rest/v2/all').then((result) => {
        return result.json();
    });

};

const fetchCountries = async() => {
    //display.innerHTML = '';

    await getApi();

    countries.filter((country) => {
        return country.name.toLowerCase().includes(search_item.toLowerCase());

    }).forEach((country) => {


        //loop through the languages of each country
        let countryLanguages = country.languages.map((languages) => {
            return languages.name;
        });

        //loop through the currencies of each country
        let countryCurrency = country.currencies.map((currency) => {
            return currency.name;
        });


        searchItem += `
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
    display.innerHTML = searchItem;

};

fetchCountries();

searchInput.addEventListener('input', e => {
    search_item = e.target.value;
    fetchCountries();

});


/*.then((data) => {
        let output = [];
        let display = document.querySelector('[data-display]');

        //loop through the data from the jso object
        data.forEach((country) => {

            //loop through the languages of each country
            let countryLanguages = country.languages.map((languages) => {
                return languages.name;
            });

            //loop through the currencies of each country
            let countryCurrency = country.currencies.map((currency) => {
                return currency.name;
            });


            output += `
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

        display.innerHTML = output;

        console.log(data);
    });
};

getApi();*/