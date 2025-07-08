const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("add")
    .setDescription("Add a new item to the list"),
  async execute(interaction) {
    // Placeholder for the command execution logic
    await interaction.reply("This command is not yet implemented.");
  },
};
