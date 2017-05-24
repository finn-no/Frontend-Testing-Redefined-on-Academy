### Codecept with Nightmare.js

* Required 3rd party mocking framework
    * Nock
* Helper methods makes syntax look clean
* Custom helpers

```javascript
/* globals Helper */
class Browser extends Helper {
    mouseover (selector) {
        return this.helpers.Nightmare
            .browser.mouseover(selector);
    }
    resizeWindow (width, height) {
        return this.helpers.Nightmare
            .browser.viewport(width, height);
    }

}
module.exports = Browser;
```


Note:

Som nevnt trenger codecept et eksternt bibliotek for mocking
Nock mocker bort kallene mot apiet
    konsollen sier fra hvis et "ulovlig" kall blir gjort
        søkesiden gjorde kall mot api som ikke var planlagt
    nock.cleanAll() rydder opp i mocks, og brekker bygget hvis en mock har blitt satt opp, men ikke blitt brukt
        fin måte å se om koden oppfører seg som forventet
            her burde det skjedd et kall
Codecept har skrevet hjelpemetoder, vise eksempler senere
Kan skrive egne hjelpemetoder