import { CommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";

export interface ICommand {
    commandName: string;
    slashBuilder: SlashCommandBuilder;

    OnCommandExecute(interaction : CommandInteraction): void;
}
