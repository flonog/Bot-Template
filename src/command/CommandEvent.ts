import { Client, Message } from "discord.js";
import { DiscordClient } from "../DiscordClient";
import {IEvent} from "../events/Event";

export class CommandEvent implements IEvent {

	action: string = "message";
	name: string = "CommandHandler";

	OnEventFired(client: Client, message : Message): void {
		if(message.author.bot)
			return;

		if(message.channel.type == "dm")
			return;
		
		if(!message.content.startsWith("!"))
			return;

		var args = message.content.slice(1).split(" ");
		var commandHandler = DiscordClient.GetSingleton().GetCommandHandler();
		var command = commandHandler.commands.find((command) => {
			return command.aliases.find(aliases => aliases == args[0]);
		})
		if(!command)
			return;
		args = args.slice(1);

		command.OnCommandExecute(message, args)
		message.delete({ timeout : 1000, reason : "command"}).catch((err) => {
			console.error(err);
		})
	}
}