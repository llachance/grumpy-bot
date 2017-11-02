const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("Mzc1NDc2MTE1MDI1ODIxNjk2.DNwmKg.J4xYD0hXINMIuMA1LpU4v2Fa_oY");
