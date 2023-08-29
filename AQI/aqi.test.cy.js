describe('AQI Website Tests', () => {
    beforeEach(() => {
      cy.visit('https://aqi.co.id/');
    });
  
    context('Scenario 1: AQI Calculation', () => {
      it('Test Case 1: Calculate AQI for a Valid Location', () => {
        cy.get('input[name="location"]').type('Jakarta');
        cy.get('button[type="submit"]').click();
        
        cy.get('.aqi-value').should('be.visible').and('be.gte', 0).and('be.lte', 500);
  
        // Take a screenshot as evidence
        cy.screenshot('aqi_valid_location');
      });
  
      it('Test Case 2: Calculate AQI for an Invalid Location', () => {
        cy.get('input[name="location"]').type('abc123');
        cy.get('button[type="submit"]').click();
  
        cy.get('.error-message').should('be.visible').and('contain', 'Invalid location entered.');
  
        // Take a screenshot as evidence
        cy.screenshot('aqi_invalid_location');
      });
    });
  
    context('Scenario 2: About Us', () => {
      it('Test Case 1: Display About Us Information', () => {
        cy.contains('Tentang Kami').click();
        cy.url().should('include', '/tentang-kami');
  
        cy.get('.about-content').should('be.visible');
  
        // Take a screenshot as evidence
        cy.screenshot('about_us_information');
      });
  
      it('Test Case 2: Validate Social Media Links', () => {
        cy.contains('Tentang Kami').click();
  
        cy.get('.social-links')
          .should('be.visible')
          .within(() => {
            cy.get('a').should('have.length', 3);
          });
  
        // Take a screenshot as evidence
        cy.screenshot('social_media_links');
      });
    });
  });
  