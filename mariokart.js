

 

var bet = prompt("Welcome to Mario Kart choose your character.");

	var Racer = function(name, speed, weight) {

		this.name = name;

		this.speed = speed;

		this.weight = weight;

		this.position = 0;

		this.report = function() {

			return this.name + " is at " + this.position;

        };

		this.run = function() {

			if(this.weight > (Math.random() * 10)) {

			this.position += this.speed;

			}

		};

		

	}

 

	var plumber = new Racer("mario", 3, 3);

		    brother = new Racer("luigi", 3, 2);

			princess = new Racer("peaches", 4, 2);

			toadstool = new Racer("toad", 4, 1);

			dragon = new Racer("bowser", 1, 4);


 

	var distance = 40;

	var winner;

	

	while(plumber.position < distance && brother.position < distance && princess.position < distance

		  && toadstool.position < distance && dragon.position < distance) {

		plumber.run();

		brother.run();

		princess.run();

		toadstool.run();

		dragon.run();

	};

 

	if(plumber.position > brother.position && plumber.position > princess.position && plumber.position > toadstool.position

	   && plumber.position > dragon.position) {

		winner = plumber.name;

		message = "Yahoooo it'saa meee Mario! I am the winner!";

	}

	else if(brother.position > plumber.position && brother.position > princess.position && brother.position > toadstool.position

	   && brother.position > dragon.position) {

		winner = brother.name;

		message = "Ahhaaa Luigi wins! I am the best!";

	}

	else if(princess.position > plumber.position && princess.position > brother.position && princess.position > toadstool.position

	   && princess.position > dragon.position) {

		winner = princess.name;

		message = "tee hee I win! All hail the princess!";

	}

	else if(toadstool.position > plumber.position && toadstool.position > brother.position && toadstool.position > princess.position

	   && toadstool.position > dragon.position) {

		winner = toadstool.name;

		message = "Nobody can beat the Toad hahaaaa!";

	}

	else {

		winner = dragon.name;

		message = "Agghhhhaha Bowser rules, the princess is mine!";

	};

 

 

console.log(plumber.report());

console.log(brother.report());

console.log(princess.report());

console.log(toadstool.report());

console.log(dragon.report());

alert(message);

 

	

	if(winner === bet) {

		alert("Way to dodge all those shells! Report to the Winner's circle.");

	}

	else {

		alert("Ohhhh noooooo you lost off to Bowser's dungeon you go.");

	}

