import {CommandHandler} from "./command/CommandHandler";
import { EventHandler } from "./events/EventHandler";
import { CommandEvent } from "./command/CommandEvent";
import { Client } from "discord.js";

export class DiscordClient {

    public static GetSingleton(): DiscordClient {
        return DiscordClient.singleton;
    }

    private static singleton: DiscordClient;
    private commandHandler: CommandHandler;
    private eventHandler: EventHandler;
    private client: Client | undefined;

    constructor() {
        DiscordClient.singleton = this;
        this.eventHandler = new EventHandler();
        this.commandHandler = new CommandHandler();
    }

    public GetClient() : Client | undefined{
        return this.client;
    }

    public GetCommandHandler(): CommandHandler{
        return this.commandHandler;
    }

    public GetEventHandler(): EventHandler{
        return this.eventHandler;
    }

    private RegisterHandlers(){
        this.eventHandler.RegisterEvent(new CommandEvent());
    }

    public Login(token: string): void {
        this.client = new Client({intents : "GUILDS"});
        this.client.login(token).then(() => {
            console.log("Launched successfuly")
        }).catch((err) => {
            console.log(err);
        });
        this.RegisterHandlers();
    }
}
