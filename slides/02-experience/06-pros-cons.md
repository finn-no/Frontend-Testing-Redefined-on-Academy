### Pros and cons

Cypress:
* Pros
    * Live updating $$$
    * Mocha & Route/call counter
    * DOM snapshot of each step
    * Good documentation; decent examples
        * `("have.attr", "src", "image.png")`
        * `("have.attr", "href", "/users")`
* Cons
    * SSR makes things difficult
    * Stackoverflow won't save your ass

Note: 

Live oppdatering/watch mode er gull for kontinuerlig utvikling av tester. Øker produktiviteten enormt
Mocha er bra
Oversikt over hvilke ruter som har blitt kallt og hvor mange; pga navngiving er det veldig lett å se om det har skjedd et uventet kall
DOM snapshotting gjør at man kan gå over stegvis hva som skjer i testen. Veldig nyttig for å finne ut hva som feiler
    Codecept kan sette pause breakpoints i koden, men det må man manuelt skrive, og så kjøre opp testen på nytt
    hver gang man endrer plassering
Relativt god dokumentasjon, ok eksempler. Par situasjoner hvor det har vært litt tynt, men da har det ofte vært
en kombinasjon av at jeg ikke kjenner hjelpeverktøyene også (chai feks)
    (have.attr, 'src', 'image')
    vet ikke hvorfor. src er kanskje ikke gjenkjent som en attributt? er listet under det på MDN

Som nevnt tidligere, SSR gjør ting litt vanskelig. Testing av broadcast feks ble løst med if else
    if ssr enabled -> produksjonskode, else -> testkode
        broadcast synlig på alle tester
        kunne ikke teste om bookingsiden for en gitt bruker hadde satt opp bookings riktig
        fordi første kall ikke var mulig å mocke ut (kom fra serveren)

Nytt og uprøvd med de ulemper det påfører + liten hjelp å få på stackoverflow; github diskusjoner/feature requester, eksempelprosjekter