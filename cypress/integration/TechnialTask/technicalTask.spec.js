/// <reference types="cypress" />

describe('Navigate to Car tax check and Retrieve Vehicle details', () => {

    let testData;

    before(function () {
         const outputFile = '/Users/mitchxxx1/Automation Testing/Assignment/cypress/fixtures/regCar.json'
        cy.task('retrieveInput', outputFile)
        
         cy.visit('https://cartaxcheck.co.uk/')
        
         cy.fixture('regCar').then(function (dataJson) {
             testData = dataJson
                return testData
         } )

     })

    it('Retrieve Car details with Registration number', () => {
        cy.visit('https://cartaxcheck.co.uk/')


        cy.get('h1').should('contain.text', 'Free Car Check')
        cy.get('#vrm-input').should('be.visible')

        const cars = testData.cars
        cy.wrap(cars).each((ele) => {
            cy.get('#vrm-input').type(ele)
            cy.get('#vrm-input').type('{enter}')
            cy.wait(3000)
         //   cy.get('.jsx-2611738455').should('not.exist')

          //  cy.get('.jsx-3496807389').should('contain.text', ele)
            
            cy.go('back')
            cy.get('#vrm-input').clear()


        })

        //  testData.cars.forEach(function () {
        //      cy.get('#vrm-input').type(cars[2])
        //      cy.get('#vrm-input').type('{enter}')
             

        //      cy.get('.jsx-3496807389').should('contain.text', cars[2])
        // })

      //  cy.readFile('cypress/fixture/regCar.json').then(r => {
       //     r.forEach() //dd[normalize-space()='Skoda']
        })
    })
