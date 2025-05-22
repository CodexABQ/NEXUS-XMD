const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "CYPHER-X:~UEsDBBQAAAgIAPsstVoLnlA75gQAADkIAAAKAAAAY3JlZHMuanNvbpVUyY7bRhT8laCvEiyuokhggHDRQknURu1BDi2yuQz37pZEyZhDllMOCWDABnwY5OgPCPwT+Qv76NN8QkDNTOzAjjPhqTe+rqques9BmoUEDdAJKM9BjsMDpKga0lOOgAK0vechDOrAhRQCBWTWdWML8bIvB65mO7wnOouQFqt50E296aYR9c8i7x13XTa7Ajd1kO93ceh8pSBuDpYEGmVQenp7c64tYG94GoxGnHq4xoishytLk0zic2x0BW6qijDEYeq38wAlCMN4gE4TGOKnwTcnrWRsdOLdcrWTLadoYZ7Z2ckmX7BGdF5t57KTCB3Hb0VPhO+NxHTO7*2+ZgZJy9qtp26qugd+GB6SZieq0V6Bxt5Sh2f1Hj4J*RS5potSGtLTk3UvLG4pyHJ8plOc+HFgt3066WdUtEbqpmzOUV90uf1gNeqYTwOOsvNKXDOzWmIO1slx4vez6Sk2*SZsDgOR9b1JtN66LOeq5qfAJ*jRK9H*0T0xo5WraUeYmupgVpsKKV077VEi9TlnmSw4by1Bd+Ek8fL4NPhG1G20R4uFtCsOfBj1udpgSFaxU2t5*HLbsHZTb6z3VzT2rY*wId3jr6LUelOjuy1ma8*Y7nPT5vMdreTok4Mc6YfVuCdnC+vcTjZt1WHH56lIfNJmNEvF20GNH494vMaisOH86ajZ6vJ7u+GrVxdGETqZLlDYmzrAyA8JxZCGWVqtcbxYB9A92MjBiF7kBZS3zp7LDdq+tCKj0XFTbI1ALvUOrokDJuheG3EQB6Yl+5srUAc5zhxECHJ7IaEZPlmIEOgjApTvLi9VkcYoySjqhy5QAMcLMsNKLMPJgvAteXYMICUwz5+liII68HCWWAgoFO9RHVz+kFuiKnS0JqtrKitybU5gxCYvi5rKcbIhcRXH5P7WeZggQmGSA4WVBKnFiLIs3HxfBykq6b2BKto8WwdeiAldpPs8zqD76K7HTeg42T6l9il19GqAMFA+WUaUhqlPKmr7FGInCA9Ir3gAxYMxQX8rjTByH7k8dA89cy8GmPeMkTQZggp7VehzcRRR*Fyf+HKOZRiOFVqMJMiM1BSrk9VGHaSwqgY+vPnh*euXd7cv397dvvrl7vbVi7vbV7*f3b76tZp*Y4QH+O7Fz+*e*vTnH+*e*vb+9csPb36sZHwgWOFxEYVhTIAC9P4J8ruW1javx9Rpd7tq21d1XwUfBXl0+L2DjsGw0Zmqg1GxZNRNwS5XNdcqO93i3LV7zXytJ5vtViLrTqRefaEIUEAnacFyZ5QSbAjnctwQIs6zrc7GNMtkb0wm5+VkHjBk7rZ7BSvg2X7LTU90R6*HQyY8FLNrltcLIz*66+liNidurOqW6l9Vt7noEDroH5edmrGYuVt1xRTGcJGeXGqbR1edE3WlzfLwaC*YmozKI81c3Tgbs4ahbiZkOtn24vl6kUnluq*LTc9u9ZYbkz31bH0RHO+zd8l+*NBzw4dUhJepF6JLC3t4sv9++nvklUWZm*onRR664r90Fs0x7Ua5UPVrGLtqd0CXy0M6t2azgpRRUCuWxzzprpDUKbcquKmykseQehlOgAJg6uLsYiyc7SvPm6mXfeUyXTNN*aHtxJBQ9WOOvhBNib8*NcFZ3oMkAApIE17bVZk4qXluU0gfUwnU6hvoLLj5C1BLAQIUAxQAAAgIAPsstVoLnlA75gQAADkIAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAA4FAAAAAA==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY NEXUS-XMD 🤍*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/78muhw.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "JEMZIE-XMD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "JEMZIE-XMD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "254794146821",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝔍𝔢𝔪𝔷𝔦𝔢 𝔇𝔦𝔳𝔞",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©much love from Jemzie*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lr95at.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> AM ACTIVE *NEXUS-XMD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "254794146821",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
