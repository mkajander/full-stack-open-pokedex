describe('Pokedex', function () {
    beforeEach(function () {
        cy.intercept('GET', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/*.png', {
            statusCode: 200,
            body: '',
            headers: {
                'content-type': 'image/png'
            }
        });
    });

    it('front page can be opened', function () {
        cy.visit('http://localhost:5000', {timeout: 200000});
        cy.contains('ivysaur')
        cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    })
    it('navigated pokemon has abilities', function () {
        cy.visit('http://localhost:5000', {timeout: 200000});
        cy.contains('ivysaur').click()
        cy.contains('chlorophyll')
    })
})