$(document).ready(function(){


	/* STEP 0: SET UP THE BOARD:
		- Create character objects to store each characters.
		- Store these characters in an array for ease of access.
		- Display the characters as their own divs.
	*/

	var isCharacterChosen = false;
	var isEnemyChosen = false;
	var char = []; //array of character objects
	var charDivs = []; //array of character divs

	function Character(needName, hitpoints, attackPower){
		this.name = needName;
		this.hp = hitpoints;
		this.ap = attackPower;
		this.isPlayer = false;
	}
	
	function resetCharacters(){
		//uses the constructor above to make characters in this format: name, HP, AP, CAP
		char[0] = new Character('Goku', 150, 7, '..'); 
		char[1] = new Character('Vegeta', 130, 10);
		char[2] = new Character('Frieza', 100, 15);
		char[3] = new Character('Buu', 175, 3);
	}



	function initNewGame(){
		resetCharacters();
		isCharacterChosen = false;
		isEnemyChosen = false;

	}

	initNewGame(); //TODO: change into start button if time available. 


	/*Step ONE Pick a character:
		- If a div is clicked, change the corresponding isPlayer to true.
		- For all divs that are false, append to a different row.*/
	$('.character').click(function(){
		if(isCharacterChosen == false){//if we have yet to select a character
			//add a value to indicate your character.
			$(this).addClass('you');


			if($('.character').attr('id') != $(this).attr('id')){
				$('.character').addClass('enemy');
			}
			//find the corresponding id to name
			for(let i = 0; i<char.length; i++){
				if ($(this).attr('id') == char[i].name){
					char[i].isPlayer = true;
				}
			}



			isCharacterChosen = true;
			$('#line1').text('Choose a Defender:');//tells the player to choose an enemy next
			
		}else if(isCharacterChosen == true &&  isEnemyChosen == false){
			$(this).attr('val','defender');
		}
	});


	

	

});