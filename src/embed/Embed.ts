import { EmbedFieldData, MessageEmbed } from 'discord.js';

export class Embed {

	public static InfoEmbed(title: string, text: string, fields: EmbedFieldData[] = []): MessageEmbed {
		return new MessageEmbed({
			color : "#01CCBB",
			title : title,
			description : text,
			fields : fields
		})
	}

	public static SuccessEmbed(text: string, title = "✔ Succès", fields: EmbedFieldData[] = []): MessageEmbed {
		return new MessageEmbed({
			color : "#1A960A",
			title : title,
			description : text,
			fields : fields
		})
	}

	public static ErrorEmbed(reason: string, title = "❌ Erreur"): MessageEmbed {
		return new MessageEmbed({
			color : "#960A0A",
			title : title,
			description : "Une erreur est survenu lors de l'exécution de cette commande.",
			fields : [{
				name : "Détails de l'erreur",
				value : `\`\`\`js\n${reason}\n\`\`\``
			}],
			footer : {
				text : "Si l'erreur persiste, contactez Flo Le Proto."
			}
		})
	}

	public static WarningEmbed(reason: string, title = "⚠ Attention", fields: EmbedFieldData[] = []): MessageEmbed {
		return new MessageEmbed({
			color : "#FFBB00",
			title : title,
			description : reason,
			footer : {
				text : "Pour plus d'information, contactez Flo Le Proto."
			},
			fields: fields
		})
	}
}