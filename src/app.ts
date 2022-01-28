import { DiscordClient } from "./class/DiscordClient";



let client = new DiscordClient();

var commandHandler = client.GetCommandHandler();

client.Login("TOKEN");