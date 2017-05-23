## Cypress

* Download and run
* Real browser (Chrome)
   * Tests run inside browser
   * Use Chrome developer tools
* Simple async API
   * No waits/sleeps needed
* Mock network calls inside browser

Note:
Så over til Cypress

Her er det veldig enkelt å komme i gang; bare last ned og kjør
Ikke nødvendig å installere noe annet, ikke node, browser, selenium eller noe annet.

Testene blir kjørt inne i en ordentlig browser som gjør at testene blir mye mer
stabile. Bare Chrome pr nå, men planen er å få inn flere. Her har man også tilgang
til alle verktøyene man er vant til når man debugger, etc.

APIet som brukes for å styre browseren er async, basert på Promises, så en trenger
ikke legge inn waits selv

Sist men ikke minst kan man mocke ajax call i browseren, dvs. den setter opp noe
ala nock eller wiremock inne i browseren. Dette er også med på å gjøre testene mye
mer stabile og enklere å sette opp.
