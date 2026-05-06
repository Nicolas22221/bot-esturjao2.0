const { Client, GatewayIntentBits, ActivityType, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// 🟢 Quando ligar
client.once('ready', async () => {
  console.log(`Bot online como ${client.user.tag}`);

  try {
    client.user.setPresence({
      activities: [{
        name: 'Eu odeio masmorra em grupo!🐟',
        type: ActivityType.Playing
      }],
      status: 'online'
    });

  } catch (e) {
    console.log(e);
  }
});

// 🐟 Responder com GIF quando for mencionado
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (!message.mentions.has(client.user)) return;

  try {
    const embed = new EmbedBuilder()
      .setTitle('blub blub 🐟')
      .setImage('https://media1.tenor.com/m/pCvKzv6CMh4AAAAd/joel-rotate.gif')
      .setColor(0x00AE86);

    await message.reply({ embeds: [embed] });

  } catch (error) {
    console.log('Erro ao enviar GIF:', error);
  }
});

// 🔑 Login
client.login(process.env.TOKEN);
