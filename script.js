window.onload = () => {
    console.log('iniciando');
    eventClickButton();
};

const eventClickButton = () => {
    const clickButon = document.querySelector('#search-button');
    clickButon.addEventListener('click', eventGetText )
};

const eventGetText = () => {
    const getText = document.querySelector('#currency-input').value;
    console.log(getText);
};

const fetchCurrency = () => {
    const saveFetch = fetch('https://api.exchangerate.host/latest')
    .then((response) => response.json())
    .then((object) => {
        const rates = object.rates;
        const ratesEntries = Object.entries(rates)
        console.log(ratesEntries);
    })
    .catch((error) => console.log(error, "eroooooou"))
    
}

fetchCurrency();