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
            slashBuilders.push(element.slashBuilder.toJSON());
        });

        // console.log(slashBuilders)
        let client = DiscordClient.GetSingleton().GetClient();
        
        rest.put(Routes.applicationGuildCommands(client.user.id, "GUILD ID"), {body : slashBuilders}).then((res) => {
            console.log(`Command registered successfully (${slashBuilders.length})`)
        }).catch((err) => {
            console.log(err)
        });
    }
}