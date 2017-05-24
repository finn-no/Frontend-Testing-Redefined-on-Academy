### Cypress

* Cypress extends Mocha, using mocha syntax
    * describe, it, beforeEach, only, skip etc
* Watch mode
* Rich API, but no "helper methods"
* Wonky with server side rendering

Note:

Mocha gjør det mulig å gruppere tester
    1 av 10 tester ikke trenger beforeeach
        tungvint i codecept
should have.class klassenavn
watch mode gjør at det går mye fortere å gjøre endringer
    codecept må kjøre opp yarn test:module, kanskje sette pause() breakpoints for å debugge
ingen hjelpemetoder ala codecept, skriver de basically selv
fordi cypress ikke kjører med ssr, så får vi ikke responsen fra serveren
    bookingtester som ikke fungerer, broadcast, brokers fra prometheus (alle testene fungerte i codecept)