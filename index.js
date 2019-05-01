var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {

    socket.on('add user', function (userName) {
        socket.userName = userName;
    });

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });

});

http.listen(3000, function(){
    console.log('listening on *:3000');
});



class ChatBot {
    constructor(cipher, instructions) {
        this.cipher = cipher;
        this.instructions = instructions;
    }

    getInstructions() {
        return this.instructions;
    }
}

let chatBot = new ChatBot("DOHA KV JVDZ LHA?",
    ["I've sent you a message, but you need to decipher it!",
        "I've used a caesar cipher with a key of 3",
        "Let's get started...",
        "The idea of the caesar cipher is to encrypt each letter of the alphabet with the letter obtained by 'shifting' the alphabet a secret number of positions.",
        "So A becomes D",
        "B becomes E",
        "C becomes F",
        "Write the answer in CAESAR CODE to pass the test and move onto the chat forum!"]);

class ChatbotSpeaks {
    constructor(){
        this.chatBot = null;
    }

    setChatBot(chatBot) {
        return this.chatBot = chatBot;
    }

    getChatBot() {
        return this.chatBot;
    }

    getChatBotInstructions() {
        return this.getChatBot().getChatBotInstructions();
    }

    printsAllInstructions() {
        const instructions = this.getChatBotInstructions();
        let instructionSteps = "";
        for (var i = 0; i < instructions.length; i++) {
            instructionSteps += (`${instructions[i]}<br />`);
        }
    }


}
