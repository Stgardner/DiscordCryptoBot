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
   
    if(message.content == "$bitcoin"){
        
        const preContent = message.content;
        const content = preContent.replace('$', "")

        //call the async function to get the data
        asyncCall(content, message)
    
    }
})

//get the requested coin from the coingecko api

async function asyncCall(content, message) { 
    
    let data = await CoinGeckoClient.coins.fetch(content,{})
    const image = data.data.image.thumb
    const bull = data.data.sentiment_votes_up_percentage
    const bear = data.data.sentiment_votes_down_percentage
    console.log(data.data)

    //returns the coin data 
    return message.reply(`\n` + "Bull: " + bull + "%" + `\n` + "Bear: " + bear + "%")
}


client.login(process.env.DISCORDJS_BOT_TOKEN)