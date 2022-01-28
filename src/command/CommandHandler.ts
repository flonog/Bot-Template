import { ICommand } from "./Command";
import { REST } from "@discordjs/rest";
import { DiscordClient } from "../DiscordClient";
import { Routes } from 'discord-api-types/v9';
export class CommandHandler {
    public commands: ICommand[] = new Array<ICommand>();

    public RegisterCommand(command: ICommand): void{
        this.commands.push(command);
    }

    public SendCommandsToRest(){
        const rest = new REST({ version: '9' }).setToken(DiscordClient.GetSingleton().GetToken());
        let slashBuilders = [];

        this.commands.forEach(element => {
            slashBuilders.push(element.slashBuilder.toJSON);
        });

        rest.put(Routes.applicationGuildCommands("", ""), {body : slashBuilders}).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        });
    }
}