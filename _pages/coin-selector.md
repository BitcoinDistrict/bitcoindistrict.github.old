---
title: Coin Selector
layout: single
permalink: /coin-selector/
body_class: coin-selector-page
description: "Choose a coin for a fun message."
---

<div class="coin-selector-page">
    <div class="container">
        <h1>Choose a Coin</h1>
        <select id="coinSelect">
            <option value="Bitcoin">Bitcoin (BTC)</option>
            <option value="Ethereum">Ethereum (ETH)</option>
            <option value="Tether">Tether (USDT)</option>
            <option value="Binance Coin">Binance Coin (BNB)</option>
            <option value="USD Coin">USD Coin (USDC)</option>
            <option value="XRP">XRP (XRP)</option>
            <option value="Cardano">Cardano (ADA)</option>
            <option value="Dogecoin">Dogecoin (DOGE)</option>
            <option value="Polygon">Polygon (MATIC)</option>
            <option value="Solana">Solana (SOL)</option>
            <option value="Polkadot">Polkadot (DOT)</option>
            <option value="Shiba Inu">Shiba Inu (SHIB)</option>
            <option value="Litecoin">Litecoin (LTC)</option>
            <option value="Avalanche">Avalanche (AVAX)</option>
            <option value="Uniswap">Uniswap (UNI)</option>
            <option value="Chainlink">Chainlink (LINK)</option>
            <option value="Algorand">Algorand (ALGO)</option>
            <option value="Cosmos">Cosmos (ATOM)</option>
            <option value="Terra">Terra (LUNA)</option>
            <option value="FTX Token">FTX Token (FTT)</option>
            <option value="VeChain">VeChain (VET)</option>
            <option value="Filecoin">Filecoin (FIL)</option>
            <option value="Internet Computer">Internet Computer (ICP)</option>
            <option value="Hedera">Hedera (HBAR)</option>
            <option value="Tezos">Tezos (XTZ)</option>
            <option value="Elrond">Elrond (EGLD)</option>
            <option value="Monero">Monero (XMR)</option>
            <option value="Aave">Aave (AAVE)</option>
            <option value="Decentraland">Decentraland (MANA)</option>
            <option value="Thorchain">Thorchain (RUNE)</option>
            <option value="Stacks">Stacks (STX)</option>
            <option value="TRON">TRON (TRX)</option>
            <option value="The Graph">The Graph (GRT)</option>
            <option value="SushiSwap">SushiSwap (SUSHI)</option>
            <option value="Zcash">Zcash (ZEC)</option>
            <option value="PancakeSwap">PancakeSwap (CAKE)</option>
            <option value="Fantom">Fantom (FTM)</option>
            <option value="Kusama">Kusama (KSM)</option>
            <option value="Ravencoin">Ravencoin (RVN)</option>
            <option value="Chiliz">Chiliz (CHZ)</option>
            <option value="Qtum">Qtum (QTUM)</option>
            <option value="Basic Attention Token">Basic Attention Token (BAT)</option>
            <option value="NEM">NEM (XEM)</option>
            <option value="Gala">Gala (GALA)</option>
            <option value="Harmony">Harmony (ONE)</option>
            <option value="IOTA">IOTA (IOTA)</option>
            <option value="Zilliqa">Zilliqa (ZIL)</option>
            <option value="Waves">Waves (WAVES)</option>
            <option value="Kadena">Kadena (KDA)</option>
            <option value="Chia">Chia (XCH)</option>
            <option value="Celo">Celo (CELO)</option>
            <option value="NEXO">NEXO (NEXO)</option>
            <option value="Hegic">Hegic (HEGIC)</option>
            <option value="Balancer">Balancer (BAL)</option>
            <option value="1inch">1inch (1INCH)</option>
            <option value="Theta Network">Theta Network (THETA)</option>
        </select>
        <button onclick="checkCoin()">Submit</button>
        <div id="result"></div>
    </div>
</div>

<!-- Add your styles scoped to the coin-selector-page class -->
<style>
    .coin-selector-page body {
        font-family: 'Arial', sans-serif;
        background-color: #ffffff;
        margin: 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .coin-selector-page select option {
        color: black; /* Set the text color of the options to black */
    }

    .coin-selector-page h1 {
        color: #000000;
        margin-bottom: 20px;
    }

    .coin-selector-page select, 
    .coin-selector-page button {
        padding: 10px;
        margin-top: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        width: 200px;
        transition: border-color 0.3s;
        color: black;
    }

    .coin-selector-page select:focus, 
    .coin-selector-page button:focus {
        border-color: #007BFF;
        outline: none;
        color: black;
    }

    .coin-selector-page button {
        background-color: #007BFF;
        color: white;
        cursor: pointer;
    }

    .coin-selector-page button:hover {
        background-color: #0056b3;
    }

    .coin-selector-page #result {
        margin-top: 20px;
        font-weight: bold;
        font-size: 18px;
        color: #000000;
        text-align: center;
    }

    .coin-selector-page .container {
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        width: 100%; /* Full width */
        max-width: 100%; /* Ensure it doesn’t exceed the viewport width */
        box-sizing: border-box; /* Include padding in the element's width */
        text-align: center;
    }

    
</style>


<!-- JavaScript for functionality -->
<script>
    function checkCoin() {
        const coinSelect = document.getElementById("coinSelect");
        const selectedCoin = coinSelect.value;
        const resultDiv = document.getElementById("result");

        if (selectedCoin === "Bitcoin") {
            resultDiv.innerHTML = `
                <p>Hell yeah! There is no second best.</p>
                <img src="/assets/img/feature/nosecondbest.jpg" alt="There is no second best." width="150">
            `;
        } else if (selectedCoin) {
            resultDiv.innerHTML = `
                <p>Come on... You're smarter than that.. Don't waste your time with ${selectedCoin}!</p>
                <img src="/assets/img/feature/confusedmeme.png" alt="There is no second best." width="150">
            `;

        } else {
            resultDiv.innerHTML = "";
        }
    }
</script>




[Want to play a game?](/flappy)