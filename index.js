import config from './config.json';
import { Client } from 'discord.js';
const client = new Client();

client.on('message', message => {
	if (!isUserAuthorized(message)) {
		return;
	}

	const asideRoom = message.guild.channels.find(findRoom(config.asideRoom));
	const gameRoom = message.guild.channels.find(findRoom(config.gameRoom));

	if (message.content.indexOf('!aside') === 0) {
		handleAside(message, asideRoom, gameRoom);
	} else if (message.content.indexOf('!end') === 0) {
		handleEnd(message, asideRoom, gameRoom);
	}
});

const findRoom = roomName => {
	return channel => channel.name === roomName;
};

const isUserAuthorized = message => {
	const hasRole = role => role.name === config.role;
	return message.member.roles.some(hasRole);
};

const handleAside = (message, asideRoom, gameRoom) => {
	if (message.mentions.members.array().length === 0) {
		message.reply('Aside requires you to tag at least one user. ex: !aside @blarglebottoms.');
	} else {
		message.member.setVoiceChannel(asideRoom);
		message.mentions.members.forEach(member => member.setVoiceChannel(asideRoom));
		message.reply('Aside started.');
	}
};

const handleEnd = (message, asideRoom, gameRoom) => {
	asideRoom.members.forEach(member => member.setVoiceChannel(gameRoom));
	message.reply('Aside ended.');
};

client.login(config.token);
