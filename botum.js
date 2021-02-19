/* POKETALE BOTUM YARDIM!!!!!!!!!!!! 
*/

const Discord = require('discord.js');
const botum = new Discord.Client();
var prefix = "pt!"    
// BoTum Un AKTif OLup OLmadıĞıNI AAAAAAAAAAAAAAAAAAAAAAAAAAAA
botum.on('ready', async () => {
  console.log("Sa yardım my botum aktif oldu")
});

// Annen
botum.on("message", async (message,params,args) => {
  	let command = msg.content.split(' ')[0].slice(prefix.length);
    if(command === "yardım") {
    msg.channel.send("sa yardım my botum")
    }
})

botum.login("tokenim")
