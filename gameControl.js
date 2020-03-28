const EventEmitter = require('events');

class Game extends EventEmitter{
    output;
 }

const rps = new Game();
//create game properties
rps.compareImg = ()=>{
    this.emit('compareImage', { result });
}

//create the listners here
rps.on('compareimage', (data)=> rps.output = data)

const balckjack = new Game();
//blackjack game properties and methods
blackjack.hit = ()=> {
    this.emit('hit', { result })
}

//blackjack listners
blackjack.on('hit', (data)=> blackjack.output = data)
module.exports = rps, blackjack;