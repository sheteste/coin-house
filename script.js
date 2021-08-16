window.onload = () => {
    console.log('iniciando');
    eventClickButton();
};

const eventClickButton = () => {
    const clickButon = document.querySelector('#search-button');
    clickButon.addEventListener('click', eventGetText)
};

const eventGetText = () => {
    const getText = document.querySelector('#currency-input').value;
    clearList();
    fetchCurrency(getText);
};

const fetchCurrency = (currency) => {
    const saveFetch = fetch(`https://api.exchangerate.host/latest?base=${currency}`)
        .then((response) => response.json())
        .then((object) => {
            baseCurrency(object.base);
            const rates = object.rates;
            const ratesEntries = Object.entries(rates)

            const currencyList = document.querySelector('#currency-list');

            ratesEntries.forEach((entry) => {
                const currency = entry[0];
                const value = entry[1]


                const itemCurrencyList = document.createElement('li');
                itemCurrencyList.innerText = `${currency}: ${value}`
                currencyList.appendChild(itemCurrencyList);
                console.log(itemCurrencyList);
            })
        })
        .catch((error) => console.log(error, "eroooooou"))
}

const clearList = () => {
    const currencyList = document.querySelector('#currency-list');
    currencyList.innerHTML = ' ';
}

const baseCurrency = (base) => {
    const baseTitle = document.querySelector('#base');
    baseTitle.innerHTML = `Valores referenes a 1 ${base}`;
}