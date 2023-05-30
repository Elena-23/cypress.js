describe('HuntingPony', function () {
    
    it('Оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="5"] > .header__collections-controls > .header__collections-link').wait(3000).click();
        cy.get('[data-product-id="342238232"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.get('.add-cart-counter__btn').wait(1000).click();
        cy.get('[data-add-cart-counter-plus=""]').wait(1000).click();
        cy.get('.add-cart-counter__detail').wait(1000).click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа');
        cy.get('#client_surname').wait(5000).type('Колесникова');
        cy.get('#client_contact_name').type('Елена');
        cy.get('#client_phone').type('89999999999');
        cy.get('#client_email').type('elena.nsu@yandex.ru');
        cy.get('#shipping_address_street').type('Земляной вал');
        cy.get('#shipping_address_house').type('9');
        cy.get('#checkout_buyer_fields > .co-input--required > .co-input-select > .co-input-field').select([2]);

        //здесь должно быть решение reCaptha 
       
        cy.get('#create_order').click()

     })
     
})
