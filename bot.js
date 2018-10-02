const Discord = require("discord.js");

client.on("message", message => {
 if (message.content === prefix + "help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
${prefix}play ⇏ لتشغيل أغنية برآبط أو بأسم
${prefix}skip ⇏ لتجآوز الأغنية الحآلية
${prefix}pause ⇏ إيقآف الأغنية مؤقتا
${prefix}resume ⇏ لموآصلة الإغنية بعد إيقآفهآ مؤقتا
${prefix}vol ⇏ لتغيير درجة الصوت 100 - 0
${prefix}stop ⇏ لإخرآج البوت من الروم
${prefix}np ⇏ لمعرفة الأغنية المشغلة حآليا
${prefix}queue ⇏ لمعرفة قآئمة التشغيل

 `)
   message.channel.sendEmbed(embed)
    
   }
   }); 
   
   client.on('ready', () => { //playing
    client.user.setGame(`$help`);
    client.user.setStatus('Online')
});
   
	client.login("process.env.BOT_TOKEN");
