/* POKETALE BOTUM YARDIM!!!!!!!!!!!! 
*/

const Discord = require('discord.js');
const botum = new Discord.Client();
var prefix = "pt!"    
// BoTum Un AKTif OLup OLmadıĞıNI AAAAAAAAAAAAAAAAAAAAAAAAAAAA
botum.on('ready', async () => {
  console.log("Sa yardım my botum aktif oldu")
});

botum.on("message", async (message,params,args) => {
  	let command = msg.content.split(' ')[0].slice(prefix.length);
    if(command === "yardım") {
    msg.channel.send("sa yardım my botum")
    }
   if(command === "") {
    msg.channel.send("KoMUt bUluNaMaDI")
    }
  if(command === "token"){
   msg.channel.send("EğLeNCe KOmuTlarInı KuLlAnmak İçİN boTa Oy VeRMeLİSiN!!!!111!)
  }
 
})

botum.login("tokenim")
