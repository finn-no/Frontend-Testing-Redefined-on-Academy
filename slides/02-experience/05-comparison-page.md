### Page Code

Codecept:
```javascript
hasMapMarker () {
        I.seeElement('.leaflet-marker-icon');
},
```

Cypress copy of codecept method:
```javascript
Cypress.addParentCommand('hasMapMarker', () => {
        cy.get('.leaflet-marker-icon');
});
```

Cypress:
```javascript
Cypress.addParentCommand('hasComponentByClassName', 
    (className) => {
        cy.get(`.${className}`);
    }
);
```

Note:
Codecept er lettere å lese, men dette er nightmare-wrapperen som de har skrevet, hjelpemetodene

Midterste metoden er en ren kopi hvis jeg skulle skrevet samme metode i cypress

Nederste er hvordan jeg valgte å implementere det.
Istedenfor å ha mange metoder som gjør det samme så valgte jeg generiske metoder med selector som input
