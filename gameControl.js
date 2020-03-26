const EventEmitter = require('events');

class Game extends EventEmitter{
    output;
 }

const rps = new Game();
//create game properties
rps.compareImg = ()=>{
    this.emit('action', { result });
}

//create the listners here
rps.on('action', (data)=> output = data)

module.exports = rps;