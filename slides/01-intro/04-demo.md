## Demo

Note:


Cypress
+ gui
+ a chrome plugin
+ real browser
  + tests are run inside the browser for more stable tests
  + sees the application while the tests runs
    + sees errors in test files instead of app
  + its own profile
  + chrome plugins
  + chrome dev console, etc
+ Tests are written in Mocha BDD style
  + chai and sinon is available
+ no external dependencies
+ uses Promises in the test api for easier testing async logic
  + retries automatically
  + automatic waiting on commands and assertions
    + no need for waits or sleeps

+ screenshots
+ video of test run
+ easy to debug
  + click back and forth in command log (it reverts the DOM to the state it was in)
  + see before and after states in browser
  + get whole status for the command that was run in the console
  + right-click and jump to html component
+ reruns tests if files are changed
+ mocks out Ajax calls | show the ROUTES panel
  + can have fixtures in files
+ viewport --> x,y or presets ("iphone-6") | show in console

- beta
- only Chrome for now
- ci uses Electron
- not true headless (needs xvfb++)


Gotchas
* window.fetch is not supported for network requests. Probably will use a fetch polyfill, so just set window.fetch = null
