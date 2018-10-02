const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
var Canvas = require('canvas');
var jimp = require('jimp');
const moment = require('moment');
var prefix = "^";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
     client.user.setActivity("^help | ^invite ",{type: 'WATCHING'})

});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**الرساله ارسلت لك فل خاص**');
 message.author.sendMessage(`

╭━━━┳╮╱╱╱╱╭╮╭━━╮╱╱╱╭╮
┃╭━╮┃┃╱╱╱╱┃┃┃╭╮┃╱╱╭╯╰╮
┃╰━━┫┃╭┳━━┫┃┃╰╯╰┳━┻╮╭╯
╰━━╮┃╰╯┫┃━┫┃┃╭━╮┃╭╮┃┃
┃╰━╯┃╭╮┫┃━┫╰┫╰━╯┃╰╯┃╰╮
╰━━━┻╯╰┻━━┻━┻━━━┻━━┻━╯

:fire: البوت فيه كثير ميزات حلوى وجميلة

:rocket: البوت فاتح ٢٤ ساعه و استجابة البوت سريعة جدا

┏━⇝『 أدارة 』⇜━┓
┣► ^clear <number> ░ لمسح الشات
┣► welcome للترحيب و للمغادرة أصنع شات اسمه
┣► ^bc <message> ░ برودكاست
┣► ^ban <user> <time> <reason> ░ بان حط سبب و مدت البان
┣► ^mute <user> ░ ميوت
┣► ^unmute <user> ░ يفك الميوت عن الشخص
┗
┏━⇝『 عامة 』⇜━┓
┣► ^help ░ يطلع لك كل خاصيات البوت
┣► ^invite ░ لدعوة البوت الى سيرفرك
┣► ^server ░ معلومات السيرفر
┣► ^avatar <user> ░ يطلع لك صورتك
┣► يعطيك رابط دعوه للسيرفر ░ رابط
┣► ^bot ░ معلومات البوت
┣► ^id ░ الهوية
┗
┏━⇝『 العاب 』⇜━┓
┣► ^عقاب
┣► ^لو خيروك
┣► ^نكت
┗
`);

    }
});
             client.on('message', message => {
                if(message.content === prefix + "invite") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**Click Here**")
                    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=466953764750884874&permissions=8&scope=bot");
                   message.channel.sendEmbed(embed);
                  }
});
      client.on('message', message => {
     if (message.content === prefix + "bot") {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('') 
            .addField('``السيرفرات``',`[ ${client.guilds.size} ]` , true)
            .addField('``الأعضاء``' ,`[ ${client.users.size} ]` , true)
    })
}
});
  client.on('message', message => {
     if (message.content === prefix + "avatar") {
        var mentionned = message.mentions.users.first();
    var Himo;
      if(mentionned){
          var Himo = mentionned;
      } else {
          var Himo = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${Himo.avatarURL}`);
      message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
	  const embed = new Discord.RichEmbed();
	if (message.content.startsWith("^server")) {
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
      let region = {
          "brazil": "Brazil",
          "eu-central": "Central Europe",
          "singapore": "Singapore",
          "us-central": "U.S. Central",
          "sydney": "Sydney",
          "us-east": "U.S. East",
          "us-south": "U.S. South",
          "us-west": "U.S. West",
          "eu-west": "Western Europe",
          "vip-us-east": "VIP U.S. East",
          "london": "London",
          "amsterdam": "Amsterdam",
          "hongkong": "Hong Kong"
      };
      var emojis;
      if (message.guild.emojis.size === 0) {
          emojis = 'None';
      } else {
          emojis = message.channel.guild.emojis.map(e => e).join(" ");
      }
  embed.setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : client.user.displayAvatarURL)
  .setThumbnail(message.guild.iconURL ? message.guild.iconURL : me.user.displayAvatarURL)
  .addField("• الوقت الذي صنع فيه السيرفر", `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
  .addField("• أيدي", message.guild.id, true)
  .addField("• صاحب السيرفر", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField("• منطقة", region[message.guild.region], true)
  .addField("• الأعضاء", message.guild.memberCount, true)
  .addField("• الرتب", message.guild.roles.size, true)
  .addField("• الرومات", message.guild.channels.size, true)
  .addField("• أيموجي", emojis, true)
  .addField("• برمشن الدخول", verifLevels[message.guild.verificationLevel], true)
  .addField("• الروم الأساسية للسيرفر", message.guild.defaultChannel, true)
  .setColor(3447003)
  message.channel.send({embed});
  }
});
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
	};
const Himo = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تروح عند شخص تقول له احبك**.",
]
 client.on('message', message => {
     if (message.content === prefix + "عقاب") {
                if(!message.channel.guild) return message.reply('** هاذا الأمر فقط للسيرفرات**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('SkelBot' ,
  `${Himo[Math.floor(Math.random() * Himo.length)]}`)
  message.channel.sendEmbed(embed);
    }
});
var Himo_04 = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png","https://f.top4top.net/p_8816hvic1.png","https://d.top4top.net/p_882020461.png","https://e.top4top.net/p_882s3ftn1.png","https://a.top4top.net/p_882eg9c51.png","https://c.top4top.net/p_882xkcqd1.png","https://f.top4top.net/p_882w7pdi1.png","https://a.top4top.net/p_882gcpmo1.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
     if (message.content === prefix + "لو خيروك") {
         var cat = new Discord.RichEmbed()
.setImage(Himo_04[Math.floor(Math.random() * Himo_04.length)])
message.channel.sendEmbed(cat);
    }
});
    client.on('message', message => {
var prefix = "^";
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'نكت')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
client.login(process.env.BOT_TOKEN);
