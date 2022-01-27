import {CommandHandler} from "./command/CommandHandler";
import * as DiscordJs from "discord.js";
import { EventHandler } from "./events/EventHandler";
import { CommandEvent } from "./command/CommandEvent";
import * as Config from "./config.json";

export class DiscordClient {

    public static GetSingleton(): DiscordClient {
        return DiscordClient.singleton;
    }

    private static singleton: DiscordClient;
    private commandHandler: CommandHandler;
    private eventHandler: EventHandler;
    private client: DiscordJs.Client | undefined;

    constructor() {
        DiscordClient.singleton = this;
        this.eventHandler = new EventHandler();
        this.commandHandler = new CommandHandler();
    }

    public GetClient() : DiscordJs.Client | undefined{
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
}
