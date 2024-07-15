// describe('My App', () => {
//     it('should display login page on startup', () => {
//       cy.visit('/');
//       cy.contains('Login');
//     });

//     it('should login successfully with correct credentials', () => {
//       cy.visit('/');
//       cy.get('input[name=username]').type('cromapp');
//       cy.get('input[name=password]').type('crompass');
//       cy.get('button[type=submit]').click();
//       cy.contains('Inicio');
//     });

//     it('should not navigate to protected route without login', () => {
//       cy.visit('/protected-route');
//       cy.contains('Login');
//     });
// });
