window.addEventListener('load', function(){
    let btccard = document.getElementById('btc-card');
    let ethcard = document.getElementById('eth-card');
    let usdcard = document.getElementById('usd-card');
    let eurcard = document.getElementById('eur-card');
    let btc = document.getElementById('h2-btc');
    let eth = document.getElementById('h2-eth');
    let usd = document.getElementById('h2-usd');
    let eur = document.getElementById('h2-eur');
    
    btccard.addEventListener('mouseover', function(){
        btc.style.color = '#f6b60d';
        btc.style.fontSize = '1.8rem'
    })
    btccard.addEventListener('mouseout', function(){
        btc.style.color = '#444444';
        btc.style.fontSize = '1.5rem'
    })
    ethcard.addEventListener('mouseover', function(){
        eth.style.color = '#a2a5ff';
        eth.style.fontSize = '1.8rem'
    })
    ethcard.addEventListener('mouseout', function(){
        eth.style.color = '#444444';
        eth.style.fontSize = '1.5rem'
    })
    usdcard.addEventListener('mouseover', function(){
        usd.style.color = '#208653';
        usd.style.fontSize = '1.8rem'
    })
    usdcard.addEventListener('mouseout', function(){
        usd.style.color = '#444444';
        usd.style.fontSize = '1.5rem'
    })
    eurcard.addEventListener('mouseover', function(){
        eur.style.color = '#5d7ea7';
        eur.style.fontSize = '1.8rem'
    })
    eurcard.addEventListener('mouseout', function(){
        eur.style.color = '#444444';
        eur.style.fontSize = '1.5rem'
    })

})