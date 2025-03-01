# ChatGPT Discord Bot
A ChatGPT powered Discord chatbot built with NodeJS.

## Public Discord
You can join the public Discord to try the bot or communicate with me or other users here: https://discord.gg/wMtMXDVhn2

## Features
* Multiple Personality Support: Add multiple personalities and depending on how you call the bot, it will respond differently.
* Enable/Disable/Reset commands for admins.
* Memory: Bot will remember conversations until restarted or reset.
* Message splitter for longer messages that exceed 2000 characters.
* Token limiter: Ability to limit amount of tokens being used in a span of time (configurable).
* Conversation history truncator: Cuts down conversation history to save tokens (configurable).

## Dependencies
* nodejs
* npm
   * dotenv
   * discord.js
   * openai
* [OpenAI API Key](https://platform.openai.com/account/api-keys)
* [Discord Application Bot](https://discord.com/developers/applications/)

## Setup/Installation
1. Create an [OpenAI API Key](https://platform.openai.com/account/api-keys). Copy the key somewhere for usage later.
2. Create a [Discord Application Bot](https://discord.com/developers/applications/). You can follow [this](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) tutorial. Make sure to enable the "Message Content Intent" under the "Priveralged Gateway Intents" section in the "Bot" tab. Copy the bot token somewhere for usage later.
3. Invite the bot to your server. You can follow [this](https://discordjs.guide/preparations/adding-your-bot-to-servers.html) tutorial.
4. Install [NodeJS](https://nodejs.org/) for your system. Refer to Google for installation based on OS.
5. Download Source Code from releases or download [this](https://github.com/Kevin8675/ChatGPT-Discord-Bot/archive/refs/heads/develop.zip) zip for the **dev** version. **Note that while the dev version has the latest features, it has undergone little testing. Bugs should be expected here and there.** You can also clone the GitHub repository.
6. If you downloaded a release or dev zip, extract the zip and open the extracted zip folder in a terminal. If you cloned repo, open the repo directory in a terminal.
7. Run `npm ci` to install NPM dependencies.
8. Copy `.env.example` to `.env` and add your bot token and insert your API key and token into `.env`. Add 1 or more personalities. Change other options to your liking.
9. Run `node deploy-commands.js` to deploy the bot's slash commands to discord.
10. Finally, run `npm start` or `node index.js` to start the bot.
11. **OPTIONAL** Install [PM2](https://pm2.keymetrics.io/) if you want to keep your bot active. Run `pm2 start index.js --watch` to start it.
### Updating
If you downloaded a zip, download the latest zip (release or dev) and extract it to the bot directory. If you cloned the repo, open the repo directory and run `git pull`. Update `.env` if needed. Then restart the bot.

## Usage
Once the bot is started, simply send a message containing the personality name you put in the `.env` file or reply to a message from the bot and the bot will respond!
### Commands
* `/enable`: Enables the bot.
* `/disable`: Disables the bot.
* `/reset`: Resets the memory of all personalities or a single personality. If personality is ephemeral, sets its prompt to `undefined`.
  - Usage: `/reset <personality_name>`
* `/personalities`: Lists available personalities and their prompts.
* `/add-personality`: Adds an ephemeral personality to the bot, it will be lost when the bot restarts. Can also update `undefined` prompts.
  - Usage: `/add-personality <name> <prompt>`
* `/token-reset`: Resets the current token count.
* `/token-count`: Shows the number of total tokens used since the bot was started OR since the first time the bot was used in the month if the bot is on for multiple months.

## Contributing
Feel free to fork this repo and submit pull requests for different features, fixes, and changes.
