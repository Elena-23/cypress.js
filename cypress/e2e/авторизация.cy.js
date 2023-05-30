describe('Форма логина и пароля', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click('');
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon')
         })

    it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click('');
        cy.get('#mailForgot').type('elena.nsu@yandex.ru');
        cy.get('#restoreEmailButton').click('');
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon')
        })

    it('Негативный кейс', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio134');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click('');
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
        })

        it('Негативный кейс', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikovvv.ru');
            cy.get('#loginButton').should('be.disabled');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').should('be.enabled');
            cy.get('#loginButton').click('');
            cy.contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon')
            })

        it('Негативный кейс валидации', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('germandolnikov.ru');
            cy.get('#loginButton').should('be.disabled');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').should('be.enabled');
            cy.get('#loginButton').click('');
            cy.contains('Нужно исправить проблему валидации');
            cy.get('#exitMessageButton > .exitIcon')
            })
                
                it('Строчные буквы в логине', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#mail').type('GerMan@Dolnikov.ru');
                    cy.get('#loginButton').should('be.disabled');
                    cy.get('#pass').type('iLoveqastudio1');
                    cy.get('#loginButton').should('be.enabled');
                    cy.get('#loginButton').click('');
                    cy.contains('Авторизация прошла успешно');
                    cy.get('#exitMessageButton > .exitIcon')
                    })        
     
})

