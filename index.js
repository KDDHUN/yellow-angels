const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "/";

var version = '0.0.5';

bot.on('ready', () => {
    console.log('A bot online!');
})



bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'parancsok':
            const embed = new Discord.RichEmbed()
                .setColor('#FFBE0C')
                .setTitle('Yellow Angels')
                .setURL('http://yellowangels.ga/')
                .setThumbnail('https://media.discordapp.net/attachments/645358239663259692/648080045465796618/logo.png?width=566&height=566')
                .setDescription('Ez itt a Yellow Angels cég hivatalos Discord botja.')
                .addField('Elérhető parancsok:', '/weboldal \n /dicord \n /truckersmp \n /vtlog \n /partnerek \n /facebook \n /instagram', true)
                .setFooter('Yellow Angels developer team');
            message.channel.sendEmbed(embed);
            break;
        case 'weboldal':
            message.channel.sendMessage('<http://yellowangels.ga/>')
            break;
        case 'discord':
            message.channel.sendMessage('https://discord.gg/SVqvzka')
            break;
        case 'truckersmp':
            message.channel.sendMessage('https://truckersmp.com/vtc/5299')
            break;
        case 'vtlog':
            message.channel.sendMessage('https://6506.vtlog.net/')
            break;
        case 'partnerek':
            message.channel.sendMessage('**Truckin Radio: http://truckinradio.ml/** \n **SCS Hungary: https://www.facebook.com/SCS-Hungary-100249714769658/**')
            break;
        case 'facebook':
            message.channel.sendMessage('https://www.facebook.com/YellowAngelsVTC/')
            break;
        case 'instagram':
            message.channel.sendMessage('https://www.instagram.com/yellow.angels.media/')
            break;
    }

})

bot.login(process.env.BOT_TOKEN);
