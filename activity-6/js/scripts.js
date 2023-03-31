var messages = [];

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

var data = [
    {
        type: messageType.out,
        user: 'You',
        message: 'Hello!'
    },
    {
        type: messageType.in,
        user: 'ChatMaster',
        message: 'Greetings, I am ChatMaster 3K. I come in peace.'
    },
    {
        type: messageType.out,
        user: 'You',
        message: 'Nice to meet you, how does this work?'
    },
    {
        type: messageType.in,
        user: 'ChatMaster',
        message: 'Type your messages below to chat with ChatMaster!'
    }

];

function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
}

function createMessageElement(message) {
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

switch(event.target.id){
    case 'send-button':
        user = 'You';
        type = messageType.out;
        break;
    case 'reply-button':
        user = 'ChatMaster'
        type = messageType.in;
        break;
    default:
        user = 'You';
        type = messageType.unknown;
}

if(messageInput.value != ''){
    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    var el = createMessageElement(message);

    messagesContainerEl.appendChild(el);

    messageInput.value = '';
}

}

function loadSeedData(){
    for (var i = 0; i < data.length; i++) {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    var messagesContainerEl = document.getElementById('message-container');

    for(var i =0; i< messages.length; i++){
        var message = messages[i];
        var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

var init = function(){
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();
};

init();