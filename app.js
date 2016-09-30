function Player(playerName, playerPosition, playerJersey){
    this.playerName = playerName;
    this.playerPosition = playerPosition;
    this.playerJersey = playerJersey;
    this.img = "http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/"
}
var players = []

function getInfo(event){
    
    event.preventDefault();
    var player = new Player(event.target.playerName.value, event.target.playerPosition.value, event.target.playerJersey.value)
    players.push(player)    
    update(players)
}

function update(players){ 
    
    var template = "";
    var rosterElement = document.getElementById('roster')
    for (var i = 0; i < players.length; i++){
        var roster = players[i];
        template += `<div id="roster" class="player-roster">
                        <div class="player-card text-center">
                            <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="">
                            <h3 class="bevan">${roster.playerName}</h3>
                            <h4 class="neuton">${roster.playerPosition}</h4>
                            <h5 class="neuton">${roster.playerJersey}</h5>
                        </div>
                    </div>`  

        rosterElement.innerHTML = template
        console.log(roster)
    }
}




// $('form').on('submit', function(){
//     $('player-roster').append(player);
// });


