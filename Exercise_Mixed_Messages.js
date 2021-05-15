// Creating a message generator program. Every time we run a program
// it should print a random message. 
// This program will display my name and a past,current a future prediction of your life.

const message_generator = {
    _messages: {
        past: [],
        current: [],
        future: []
    },
    addmessage(pastM,currentM,futureM){
        if(pastM === undefined || currentM === undefined || futureM === undefined){
            return console.log('Please insert the three messages past/current/future')
        }else{
            this._messages.past.push(pastM);
            this._messages.current.push(currentM);
            this._messages.future.push(futureM);
            }
    },
    get messages(){
        return this._messages
    },
    printmessage(input_name){
        let random_past = Math.floor(Math.random()*this._messages.past.length);
        let random_current = Math.floor(Math.random()*this._messages.current.length);
        let random_future = Math.floor(Math.random()*this._messages.future.length);
        return 'Hi ' + input_name + '! '+ this._messages.past[random_past]+'. ' + this._messages.current[random_current] +'. '+ this._messages.future[random_future] + '.'
    }
}

//Creating messages 
message_generator.addmessage('You had a terrible past', 'Now, you have a good job', 'You will visit a new countrie');
message_generator.addmessage('You were a lucky person', 'I feel, you are not having a good time', 'You will find a new job soon');
message_generator.addmessage('You enjoyed your childhood', 'The oracle says that you are enjoying life now', 'You will get married soon');

message_generator.addmessage('This message has a mistake');

//Check messages inside the program
console.log(message_generator.messages)
// Print the random message.
console.log(message_generator.printmessage('Friend'))
