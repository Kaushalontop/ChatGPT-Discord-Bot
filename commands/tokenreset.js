// Requre the necessary discord.js classes
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
// Initialize .env file
require('dotenv').config({ path: '/.env'});

module.exports = {
    data: new SlashCommandBuilder()
        // Command details
        .setName('token-reset')
        .setDescription('Reset the token count.')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .setDMPermission(false),
    async execute(interaction, state) {
        // Commands to execute
        state.tokenCount = 0;
        await interaction.reply(process.env.TOKEN_RESET_MSG);
    },
};
