### Test Code

Codecept:
```javascript
Scenario('Has object marker', (resultPage, fhhMap) => {
    fhhMap.mockSingleCabin();
    resultPage.goto();
    fhhMap.hasMapMarker();
});
```
Cypress
```javascript
it('Has heatmap marker', () => {
    cy
        .hasComponentByClassName('leaflet-marker-icon');
});
```

Note:
Fordi Cypress bruker Mocha, så ligger mesteparten av koden i beforEach.
En test kan derfor fokusere på hva den faktisk vil teste