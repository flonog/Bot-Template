import { Client, CommandInteraction } from "discord.js";
import { DiscordClient } from "../DiscordClient";
import {IEvent} from "../events/Event";

export class CommandEvent implements IEvent {

	action = "message";
	name = "CommandHandler";

	OnEventFired(client: Client, interaction : CommandInteraction): void {
		
		const commandHandler = DiscordClient.GetSingleton().GetCommandHandler();
		
		const command = commandHandler.commands.find((command) => {
			return command.commandName == interaction.commandName;
		})
		if(!command)
			return;

		command.OnCommandExecute(interaction);
	}
}