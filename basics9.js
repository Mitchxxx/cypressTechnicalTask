const fs = require('fs');

fs.readFile('../car_input.txt', 'utf8', function(err, data) {
	if (err) throw err;
	const RegNumber = /[A-Z]{2}[0-9]{2}\s?[A-Z]{3}/gm
	const cars = data.match(RegNumber);
//	console.log(cars);
	const carsJson = JSON.stringify(cars);

	fs.writeFile("../RegNumber.json", carsJson, 'utf8', function (err) {
		if (err) {
			return console.log(err);
		}
	//	console.log("The file was saved!")
	//	console.log(carsJson)

	})
	module.exports

	console.log(carsJson)
	console.log(cars)
});

