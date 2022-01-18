const fetch = require( 'node-fetch' );

module.exports = {
    home: async(req, res) => {
        let allCurrencies;
        let EURCurrencies;

        await fetch( 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json' )
            .then( response => response.json() )
            .then( currenciesList => { 
                allCurrencies = currenciesList;
            })
        await fetch( 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json' )
            .then( response => response.json() )
            .then( EURvsCurrency => { 
                EURCurrencies = EURvsCurrency;
            })
        
        res.render( 'index', { allCurrencies, EURCurrencies } ) 
    }
};