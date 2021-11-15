/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const fs = require('fs')

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('task', {
  	retrieveInput(output){
  		 fs.readFile('/Users/mitchxxx1/Automation Testing/Assignment/cypress/fixtures/car_input.txt', 'utf8', function(err, data) {
	if (err) throw err;
	const RegNumber = /[A-Z]{2}[0-9]{2}\s?[A-Z]{3}/gm
	const cars = data.match(RegNumber);
    console.log(cars);
         const carsJson = JSON.stringify(cars); // Convert array to String
         const reg = '{"cars": ' + carsJson + ' }';
      //   const regJson = JSON.stringify(reg);
       //  finalJson = regJson.replace(/\\/g, "");
     fs.writeFile((output), reg, 'utf8', function (err) {
         if (err) {
             return console.log(err);
         }
        console.log(reg)
     });
       });
      return null
  	}
  })
}

