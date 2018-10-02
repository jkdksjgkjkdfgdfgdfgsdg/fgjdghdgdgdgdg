const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
var Canvas = require('canvas');
var jimp = require('jimp');
const moment = require('moment');
var prefix = "#";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

console.log('Done :D test')

client.login(process.env.BOT_TOKEN);
