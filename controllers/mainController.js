const fetch = require( 'node-fetch' );

module.exports = {
    home: async(req, res) => {
        let currencies;
        let EURCurrencies;
        await fetch( 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json' )
            .then( response => response.json() )
            .then( currenciesList => { 
                currencies = currenciesList;
            })
        await fetch( 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json' )
            .then( response => response.json() )
            .then( EURvsCurrency => { 
                EURCurrencies = EURvsCurrency;
            })
        res.render( 'index', { currencies, EURCurrencies } ) 
    }
};