require('dotenv').config()
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();



const { Client, Message } = require('discord.js');
const client = new Client();
const message = new Message();



client.on('ready',() => {
    console.log(`${client.user.username} has logged in.`)
})

//when a user posts a message this function is triggered

client.on("message", (message) => {
   
    if(message.content[0] == "$"){
        const preContent = message.content;
        const content = preContent.replace('$', "")
        //call the async function to get the data
        asyncCall(content, message)
    
    }
})

client.on("message", (message) => {

    //bunch of if statements :0
    if(message.content == "hi bot") {
        return message.reply("hello")
    } if(message.content === "hey bot") {
        return message.reply("Hey Sexy 😍😍😍")
    } if (message.content == "plants") {
    return message.reply("🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌳🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🍀🍀🍀🍀🍀🍀🍀🍀🍀🍀🌵🌵🌵🌵🌵🌵🌵🌵🌵🌵")
    } if(message.content.toLowerCase().includes("fuck you crypto bot")) {
        return message.reply("YOURE A DEAD MAN 🤬🤬🤬🤬🤬🤬")
    }
    if (message.content.toLowerCase().includes("fuck")) {
        return message.reply("Keep it clean in the chat please")
    } 
    if (message.content.toLowerCase().includes("bitch")) {
        return message.reply("Watch your language please")
    } 
    if (message.content.toLowerCase().includes("cunt")) {
        return message.reply("Watch your language!")
    } 
    if (message.content.toLowerCase().includes("shit")) {
        return message.reply("light language warning")
    } 
    if (message.content.toLowerCase().includes("moon")) {
        return message.reply("Did somebody say 🌑? 💸📈🚀🚀🚀")
    } 
    if (message.content == "will it pump?") {
        return message.reply("Oh, you know it will pump bb")
    } 
    if (message.content == "pump it") {
        return message.reply("YEET")
    } 
    if (message.content.includes("good morning")) {
        return message.reply("Buenos Dias")
    } 
    if (message.content.includes("polkadot")) {
        return message.reply("polka polka")
    } 
    if (message.content.includes("Elon Musk")) {
        return message.reply("Elon so hot right now")
    }
})

//get the requested coin from the coingecko api

async function asyncCall(content, message) { 

    try{
    let data = await CoinGeckoClient.coins.fetch(content,{})
    const id = data.data.id
    const bull = data.data.sentiment_votes_up_percentage
    const bear = data.data.sentiment_votes_down_percentage
    const currentPriceUSD = data.data.market_data.current_price.usd
    const totalVolume = data.data.market_data.total_volume.usd
    const dayHigh = data.data.market_data.high_24h.usd
    const dayLow = data.data.market_data.low_24h.usd
    const priceChange24hrPercentUSD = data.data.market_data.price_change_percentage_24h_in_currency.usd
    const priceChange24hrUSD = data.data.market_data.price_change_24h_in_currency.usd
    const priceChange30dPercentUSD = data.data.market_data.price_change_percentage_30d_in_currency.usd
    

    //returns the coin data 
    return message.reply( `\n` + id.toUpperCase() + `\n` + "Current Price (USD): " + currentPriceUSD + `\n` + "Total Volume: " + totalVolume + `\n` +
    "24 Hour High: " + dayHigh +  `\n` + "24 Hour Low: " + dayLow + `\n` + "Returns (24Hr): " + (priceChange24hrPercentUSD).toFixed(2) + 
    "%" + `\n` + "Returns (24Hr) USD: " + "$" + (priceChange24hrUSD).toFixed(2) + `\n` +  "Returns (30D): " + priceChange30dPercentUSD.toFixed(2) + "%" + "\n" + "Bull: " + bull + "%" + `\n` + "Bear: " + bear + "%" + `\n` + "Powered by CoinGecko API" )
   
    } catch(err){console.log(err)}

}



client.login(process.env.DISCORDJS_BOT_TOKEN)