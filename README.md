# asidebot

Simple bot to move one or more users (including the calling user) from one voice channel to another voice channel. Intended for something like Dungeons and Dragons, letting the DM move a specific player from the game chat to a private chat to discuss something in private.

## installing and running

To install and run the bot:

1. Set up two voice channels in your server. One for the game chat and one for the private chat.
2. Set up two roles. An asidebot role with the Move Members permission, assign it to your bot. Then add an asidebot-user role. Assign this role to whoever should have permission to use the bot.
3. Run npm install
4. Create a config.json in the root of the bot directory with this format:
{
	"token": "your bot token",
	"asideRoom": "name of the room to hold the private conversation",
	"gameRoom": "name of the room that has the general game converation",
	"role": "asidebot-user"
}
5. Run starter.js

## commands

### !aside
This command begins a private conversation. You must tag at least one user. You and all tagged users will be moved to the asideRoom voice chat.

NOTE: Only users that are actively in a voice channel may be moved to a voice channel.

### !end
This command ends a private conversation. Everyone in the asideRoom will be moved to gameRoom.
