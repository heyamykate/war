$(document).ready(function() {

    //what does this do?
    function convert_value_to_string(value) {
        if (value > 10) {
            switch (value) {
                case 11:
                    return 'Jack';
                    break;
                case 12:
                    return 'Queen';
                    break;
                case 13:
                    return 'King';
                    break;
            }
        }
        return value.toString();
    }

    //what does this do?
    var deck = [];
    var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    for (var i = 0; i < suits.length; i++) {
        var suit = suits[i];
        for (var j = 0; j < 13; j++) {
            deck.push({
                number: j + 1,
                suit: suit});
        }
    }

    //shuffle the deck
    deck = _.shuffle(deck);
    console.log(deck);

    var cards_player_1 = [];
    var cards_player_2 = [];
    //divide out the cards into the two arrays

    cards_player_1 = (deck.slice(0, 26));
    cards_player_2 = (deck.slice(26));
    console.log(cards_player_1);
    console.log(cards_player_2);


    //create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
    var warTime = function(p1card, p2card) {

        if (p1card.number === p2card.number) {
            return false;
        } else if (p1card.number > p2card.number) {
            return 'Player 1 wins'
        } else {
            return 'Player 2 wins'
        }
    };

    //create a play function
    //compare the cards
    //give the winner both cards (at end of deck)
    function play() {
        var p1card = cards_player_1[0];
        var p2card = cards_player_2[0];
        var result = warTime(p1card, p2card);

        if (result === 'Player 1 wins') {
            cards_player_1.push(cards_player_2.splice(0, 1))
        } else if (result === 'Player 2 wins') {
            cards_player_2.push(cards_player_1.splice(0, 1))
        }
        else {
            return 'Draw again';
        }


		//this function (defined below) will continue to the next turn
		advance();
	}
	
	function advance() {
        debugger;
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	})
});