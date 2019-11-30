var app = new Vue({
    el: '#app',
    data: {
		arrRandoms: [],
		checked: '',
		numOfPows: 0,
		rndSize: 0,
		PowOfTwo: (val) => val && !(val & (val - 1)) //It checks if the given value is a power of 2 or not. I picked up the formula from a C# forum :)
		//This format is just a choice in order to demonstrate arrow functions
    },
	
	mounted () {
		//this.setRandoms()
	},
	
    methods: {
		setRandoms() {			
			for (i = 0; i < 5000; ++i) {
				let rand = Math.floor(Math.random() * 99999) + 10 //Floor ensures that the number will be an integer | *99999 ensures that the number won't have more than 5 digits | +10 makes the number at least 2 digits
				this.arrRandoms[i] = rand
			}
			this.rndSize = this.arrRandoms.length
		},
		
		checkPows() {
			this.setRandoms() //Populates the array arrRandoms
			for (var i = 0; i < this.arrRandoms.length; ++i) {
				this.PowOfTwo(this.arrRandoms[i]) ? ++this.numOfPows : this.numOfPows 
				this.checked = this.checked + this.arrRandoms[i] + ' - ' + this.PowOfTwo(this.arrRandoms[i]) + '\n'
			}
		},
		resetScreen() {
			this.arrRandoms.length = 0
			this.checked = ''
			this.numOfPows = 0
			this.rndSize = 0
		}
    }
})