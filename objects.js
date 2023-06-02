let me = {
	"gender": "male",
	"firstName": "Fidel",
	"middleName": "Livino",
	"lastName": "Pedro",
	"born": new Date("01/11/2002"),
	father: {
		"firstName": "Livino",
		"middleName": "Pedro",
		"lastName": "Luis",
	}
}
let other = {
	"gender": "female",
	"firstName": "Roro",
	"middleName": "Adriano",
	"lastName": "Alberto",
	"born": new Date("05/23/2002"),
	father: {
		"firstName": "Adriano",
		"middleName": "Alberto",
		"lastName": "Antonio",
	}
}
let users = [me, other]
let pron;
let today = new Date();
let print = function (user) {
	user.gender === "male" ? pron = "His" : pron = "Her";
	return console.log(`		The user we have is ${user.firstName}.
		${pron} middle name is ${user.middleName}.
		${pron} surname is ${user.lastName}.
		${pron} father's name is ${user.father.firstName}.
		${user.firstName} was born on ${user.born.toDateString()}
	`)
	}

users.forEach( function(element) {
	print(element);
});
console.log(`		By Fidel ${today.getFullYear()}`)