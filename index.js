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
    await client.user.setUsername('esturjão do rio');

    await client.user.setAvatar('https://imgs.search.brave.com/L7JijeglpkVnftwWTm1Is0IUYo6dDjd5hgYjLEIGwps/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuYWxiaW9ub25s/aW5lLmNvbS92MS9p/dGVtL1Q4X0ZJU0hf/RlJFU0hXQVRFUl9B/TExfQ09NTU9OLnBuZz9jb3VudD0xJnF1YWxpdHk9MQ');

    client.user.setPresence({
      activities: [{
        name: 'quero um labubu aquático 🐟',
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
