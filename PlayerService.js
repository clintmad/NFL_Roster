var myPlayers = [];
var playersData = []


function PlayerService() {




  this.getPlayers = function getPlayers() {
    return playersData
  }

  this.getMyPlayers = function getMyPlayers() {
    return myPlayers
  }
  this.savePlayers = function () {
    localStorage.setItem('myRoster', JSON.stringify(myPlayers))
  }


  /**Function to add players to my roster */
  this.addToMyPlayers = function addToMyPlayers(id) {
    for (var i = 0; i < playersData.length; i++) {
      var playerIndividual = playersData[i];
      if (id == playerIndividual.id) {
        myPlayers.push(playerIndividual)
        console.log(myPlayers)
        playersData.splice(i, 1)
      }

    }
  }
  /**Function to remove players from my roster */
  this.removeMyPlayer = function removePlayer(id) {
    for (var i = 0; i < myPlayers.length; i++) {
      var myIndividual = myPlayers[i];
      if (id == myIndividual.id) {
        myPlayers.splice(i, 1)
        playersData.push(myIndividual)
      }

    }
  }



  this.getNFL = function loadPlayersData(callback) {
    var apiUrl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";


    var localData = localStorage.getItem('playersData');
    if (localData) {
      playersData = JSON.parse(localData);
      return callback(playersData);

    }

    var url = "http://bcw-getter.herokuapp.com/?url=";
    var endPointUrl = url + encodeURIComponent(apiUrl);
    $.getJSON(endPointUrl, function (data) {
      playersData = data.body.players;
      console.log('Player Data Ready')
      console.log('Writing Player Data to localStorage')
      localStorage.setItem('playersData', JSON.stringify(playersData))
      console.log('Finished Writing Player Data to localStorage')
      callback(playersData)
    });
  }

}
