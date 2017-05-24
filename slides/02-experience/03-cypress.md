### Cypress

* Cypress extends Mocha
    * describe, it, beforeEach, only, skip etc
* Watch mode
* Rich API, more "hands on"

Note:

Mocha gjør det mulig å gruppere tester
    1 av 10 tester ikke trenger beforeeach
        tungvint i codecept
should have.class klassenavn
watch mode gjør at det går mye fortere å gjøre endringer
    codecept må kjøre opp yarn test:module, kanskje sette pause() breakpoints for å debugge
codecept sin kode wrapper nightmare sine bibliotek, bruker cypress api direkte
    syntaksen er litt mindre lesbar umiddelbart, men kanskje "lettere" å gå ut av boksen