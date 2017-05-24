## Demo

Note:
Så over til demoen.

Vi skal kjøre en end-2-end test av en liten todo app som helt sikkert mange
kjenner igjen. En liten forskjell her er at den gjør kall til et api som i
dette tilfellet er en Kotlin app.

< kjør >

Her kan vi se at kjøringen av testene vises til venstre i browseren, mens appen
vises i høyre del live mens den blir styrt av testen.

Dette er en vanlig Chrome instans som kjører i en egen profil. Cypress er mer
eller mindre "bare" en Chrome plugin.

Hva skjer nå hvis vi prøver å stoppe apiet

< stopp apiet >
< kjør >

Som forventet så feiler testene. Men hva med å mocke ut nettverkskall? La oss
prøve det.

Her ser dere at testene er skrevet i Mocha BDD style. Assertions er basert på
Chai. Spørringene gjøres med CSS selectors. APIet er promise-basert som gjør
det mulig for Cypress å f.eks. gjøre retries automatisk. Neste steg kjøres også
først når det aktive resolves, dvs. ingen sleeps er nødvendig

< enable components tests >
< 'nomatch' på assert contain + syntaks feil >
< kjør >
< feil vises på høyre side >
< fiks syntaks feil >
< kjør >

Disse testene kjører uten api selv om de gjør kall. Her er hvordan dette settes opp
i testen. Man setter opp ruter og hvordan disse skal håndteres. I stedet for å
skrive test-data her kan man også referere filer.

Her kan man også vente på at nettverkskallet er gjort og så sjekke på at kallet
ser ut som man forventer. Venting på nettverkskall (og response) gjør igjen at
testene blir mer stabile.

Debugging av tester er veldig mye enklere i Cypress. Den tar snapshot av DOMen
for hvert steg slik at man kan gå fram og tilbake i loggen og se hvordan appen så
ut. For hvert steg kan en se før/etter tilstand (mus-klikk, etc).

Disse utmockede nettverkskallene blir også vist her. Enda mer info får en i
developer tools. Og en kan også kjøre apiet her --> cy.viewport(iphone-6)

Og når man skal kjøre dette på CI eller bare sammen med en større test-suite, så
kan man kjøre vha en cli som også lager video og screenshots.



+ reruns tests if files are changed

- beta
- only Chrome for now
- ci uses Electron
- not true headless (needs xvfb++)


Gotchas
* window.fetch is not supported for network requests. Probably will use a fetch polyfill, so just set window.fetch = null
