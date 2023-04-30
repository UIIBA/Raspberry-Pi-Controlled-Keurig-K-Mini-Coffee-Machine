const scoreBoard = {
	_round: 1,
	_home: 0,
	_away: 0,
	range: [0, 99],
	inningrange: [1, 10],
	set home(val) {
		this._home = val;
		document.querySelector('#team1').textContent = this._home;
	},
	set away(val) {
		this._away = val;
		document.querySelector('#team2').textContent = this._away;
	},
	set round(val) {
		this._round = val;
		document.querySelector('#roundnum').textContent = this._round;
	},
	checkRangeAndUpdate(value, operator, step) {
		// destructure max and min
		
		const [inningmin, inningmax] = this.inningrange;
		const [min, max] = this.range;
		
		// set getter to underscore value for accessing object
		const getter = `_${value}`;
		if (operator === '+' && (this[getter] + step) - 1 < max) {
			// if operator is add and the incrementation wont exceede max increment by step
			if (value == "round" && operator === '+' && (this[getter] + step) - 1 < inningmax) {
				this[value] = this[getter] + step;
			}
			if (value == "round" && operator === '+' && (this[getter] + step) > inningmax) {
				this[value] = 1;
			}
			if (value !== "round") {
				this[value] = this[getter] + step;
			}
			if (this[getter] == max) {
				this[value] = 0;
			}
			
		}
		if (operator === '-' && (this[getter] - step) + 1 > min) {
			// if operator is sub and the decrementation wont go below min deincrement by step
			this[value] = this[getter] - step;
		}
		if (operator === '0') {
			this._home = 0;
			this._away = 0;
			this._round = 1;

			document.querySelector('#team1').textContent = 0;
			document.querySelector('#team2').textContent = 0;
			document.querySelector('#roundnum').textContent = 1;
		}
	},
	homeplus: ['home', '+', 1],
	homeminus: ['home', '-', 1],
	awayplus: ['away', '+', 1],
	awayminus: ['away', '-', 1],
	roundplus: ['round', '+', 1],
	roundminus: ['round', '-', 1],
	ball: ['ball', '+', 1],
	strike: ['strike', '+', 1],
	out: ['out', '+', 1],
	clear: ['clear', '0', 1]
}

function init() {
	const container = document.querySelector('.scorecontainer');
	container.addEventListener('click', function(e) {
		// run function with params that match the buttons id
		scoreBoard.checkRangeAndUpdate.apply(scoreBoard, scoreBoard[e.target.id]);
		var i = document.createElement("img");
		i.src = e.target.id;
		console.log(e.target.id);
	});
	//showTime();
	const selection = document.querySelector('.calendarcontainer');
	selection.addEventListener('click', function(e) {
		// run function with params that match the buttons id
		
		var i = document.createElement("img");
		i.src = e.target.id;
		console.log(e.target.id);
	});
}


function showTime() {
	var date = new Date();
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59
	var s = date.getSeconds(); // 0 - 59
	var session = "AM";

	if (h == 0) {
		h = 12;
	}

	if (h > 12) {
		h = h - 12;
		session = "PM";
	}

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	var time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").textContent = time;

	setTimeout(showTime, 1000);

}
