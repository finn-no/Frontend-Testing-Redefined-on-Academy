```javascript
describe('result page', () => {
    beforeEach(() => {
        cy.server()
            .addDefaultListRoute()
            .viewport(1000, 1600)
            .visit('http://localhost:3000/reise/feriehus-hytteutleie/resultat', {
                onBeforeLoad (contentWindow) {
                    contentWindow.fetch = null;
                },
            });
    });
```
