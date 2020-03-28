// handle all REST api endpoint request
// predefined function calls (within the models) are called here to query db for data and  rendering of same

//updateOne
const express = require('express');
const router = express.Router();

const Player = require('../models/players');
const Game = require('../models/games');

//record api homepage
router.get('', (req, res)=>{
    res.render('record')
})

//player api handle
router.get('/players', (req, res)=>{
    Player.getPlayers((err, players)=>{
        if(err){
            throw err;
        }
        res.json(players);
    });
})

router.post('/players', (req, res)=>{
    player = req.body;
    Game.addGame(player, (err, player)=>{
        if(err){
            throw err;
        }
        res.json(player);
    })
})

router.put('/players', (req, res)=>{

})

router.delete('/games', (req, res)=>{
    let { name } = req.body;
    Player.deletePlayer(name, (err, player)=>{
        if(err){
            throw err;
        }
        res.end(`${player.name} has been deleted from records.`);
    })
})

//game api handle
//get games
router.get('/games', (req, res)=>{
    Game.getGames((err, games)=>{
        if(err){
            throw err;
        }
        res.json(games);
    });

})


//create new game record
router.post('/games', (req, res)=>{
    game = req.body;
    Game.addGame(game, (err, game)=>{
        if(err){
            throw err;
        }
        res.json(game);
    })
})

router.put('/blackjack', (req, res)=>{
    let { name } = req.body;
    let { wins, loss, draws } = req.body;
    let game = {
        player:name,
        records:{
            wins: wins,
            loss: loss,
            draws: draws
        }
    }
    // update the player model
    Player.updatePlayer(name, game.records, {upsert:true}, (err, game)=>{
        if(err){
            throw err;
        }
    res.end(
        `You now have ${game[records][wins]} wins, 
        ${game[records][loss]} loss, and 
        ${game[records][draws]} draws,`)
    })

    
    // update the game model
    Game.updateGame(name, game, {upsert:true}, (err, game)=>{
        if(err){
            throw err;
        }
        res.end(`${game.name} has been updated`)
    })
})

//update rps endpoint
router.put('/rps', (req, res)=>{
    let { name } = req.body;
    let { wins, loss, draws } = req.body;
    let game = {
        player:name,
        records:{
            wins: wins,
            loss: loss,
            draws: draws
        }
    }
    // update the player model
    Player.updatePlayer(name, game.records, {upsert:true}, (err, game)=>{
        if(err){
            throw err;
        }
    res.end(
        `You now have ${game[records][wins]} wins, 
        ${game[records][loss]} loss, and 
        ${game[records][draws]} draws,`)
    })

    //update game model
    Game.updateGame(name, game, {upsert:true}, (err, game)=>{
        if(err){
            throw err;
        }
        res.end(`${game.name} has been updated`)
    })
})

router.delete('/games', (req, res)=>{
    let { name } = req.body;
    Game.deleteGame(name, (err, game)=>{
        if(err){
            throw err;
        }
        res.end(`${game.name} has been deleted from records.`);
    })
})