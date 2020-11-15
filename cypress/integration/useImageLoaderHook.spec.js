describe('useImageLoaderHook', function() {
    beforeEach(function() {
        cy.visit('/')
    })

    it('should display the three image buttons', function() {
        cy.get('.image-btn').should('have.length', 3);
    });

    it('should use the useImageLoaderHook to smoothly load an image if the src is available', function() {
        cy.get('.image-btn').eq(1).click();
        cy.get('.loaded').should('have.length', 1);
    });
})