import { ApplicationCommandOptionType } from 'discord-api-types/v10';

export const TagCommand = {
	name: 'tag',
	description: 'Send a tag by name or alias',
	options: [
		{
			type: ApplicationCommandOptionType.String,
			name: 'query',
			description: 'Tag name or alias',
			required: true,
			autocomplete: true,
		},
		{
			type: ApplicationCommandOptionType.Boolean,
			name: 'hide',
			description: 'Hide command output',
			required: false,
		},
		{
			type: ApplicationCommandOptionType.User,
			name: 'mention',
			description: 'User to mention',
			required: false,
		},
	],
} as const;
