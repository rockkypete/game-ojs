//get the value of the form
$('#win').value()


//creating the rps game object structure
const rpsObj = {
    'imageList': ['rock', 'paper', 'scissor'],
    'humanScore': 0,
    'botScore': 0,
    'remark': {'message': '', 'colour': ''},
    'imageSource': {
        'rock': $('#rock').attr('src'),
        'paper':$('#paper').attr('src'),
        'scissor':$('#scissor').attr('src')
    },
    'rpsScoreDb':{
        'rock':{'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor':{'paper': 1, 'scissor': 0.5, 'rock': 0},
    },
    'randomImage': function (){
        return this.imageList[Math.floor(Math.random() * this.imageList.length)];
    },
    'decideWinner': function(choice1, choice2){
        this.humanScore += this.rpsScoreDb[choice1][choice2];
        this.botScore += this.rpsScoreDb[choice2][choice1];
    },
    'gameRecord': function (){
        if(this.humanScore === 0) {
            this.remark['message'] =  'You Lost!';
            this.remark['colour'] = 'danger';
        }else if(this.humanScore === 0.5) {
            this.remark['message'] =  'You Tied!';
            this.remark['colour'] = 'warning';          
        }else {
            this.remark['message'] =  'You Won!';
            this.remark['colour'] = 'success';
        }
    },
    'frontLogic': function (humanChoice, botChoice) {
        //clear the grids that hold images
        $('#image1').empty();
        $('#image2').empty();
        $('#image3').empty();
        //append the choices and remark made to divs
        $('#image1').html(`<img src ="${this.imageSource[humanChoice]}" alt="${humanChoice}">`);
        $('#image2').html(`<p class="text-${this.remark['colour']}">${this.remark['message']}</p>`);
        $('#image3').html(`<img src ="${this.imageSource[botChoice]}" alt="${botChoice}">`);
        // display score
        
    }    
}

//declaring the rps game function
function rpsGame(yourChoice){
    let hImageChoice = yourChoice.id;

    //bot makes choice
    let bImageChoice = rpsObj.randomImage();

    //call the decide winner method of the rps object. to update score
    rpsObj.decideWinner(hImageChoice, bImageChoice);

    //call the game record method of the rps object. to update remark
    rpsObj.gameRecord();

    //call the decide winner method of the rps object. to display image choices and update remark
    rpsObj.frontLogic(hImageChoice, bImageChoice);

}