const fetch = require( 'node-fetch' );

module.exports = {
    home: async(req, res) => {
        let allCurrencies;
        let eurCurrencies;
        let btcCurrencies;

        await fetch( 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json' )
            .then( response => response.json() )
            .then( currenciesList => {
                allCurrencies = currenciesList;
            })
        await fetch( 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json' )
            .then( response => response.json() )
            .then( currencyVsEUR => { 
                eurCurrencies = currencyVsEUR;
            })
        await fetch( 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc.json' )
            .then( response => response.json() )
            .then( currencyVsBTC => { 
                btcCurrencies = currencyVsBTC;
            })

        res.render( 'index', { allCurrencies, eurCurrencies, btcCurrencies } );
    },
    euro: async(req, res) => {
        let mainCurrency = 'eur';
        let allCurrencies;
        let primaryCurrencies;

        await fetch( 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json' )
            .then( response => response.json() )
            .then( currenciesList => { 
                allCurrencies = currenciesList;
            })
        await fetch( 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json' )
            .then( response => response.json() )
            .then( currencyVsEUR => { 
                primaryCurrencies = currencyVsEUR;
            })
        
        res.render( 'rates', { mainCurrency, allCurrencies, primaryCurrencies } ) 
    },
    btc: async(req, res) => {
        let mainCurrency = 'btc';
        let allCurrencies;
        let primaryCurrencies;

        await fetch( 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json' )
            .then( response => response.json() )
            .then( currenciesList => { 
                allCurrencies = currenciesList;
            })
        await fetch( 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc.json' )
            .then( response => response.json() )
            .then( currencyVsBTC => { 
                primaryCurrencies = currencyVsBTC;
            })
        
        res.render( 'rates', { mainCurrency, allCurrencies, primaryCurrencies } ) 
    }
};