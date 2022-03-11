Description
Patricia events is a web app that allows a user to see a list of all upcoming events for a particular artist,search through it and book a ticket

Github Repo: https://github.com/olabamipetaiwo/patriciaevents.git

Live Web App: https://patriciaevents.vercel.app/

Features
- When a user clicks on “Buy Ticket”, it takes the user to the event url from the API
- When the user uses the search field, It should filter the “All events” section. (this should be a frontend implementation alone)
- There are 2 sections, Featured events and All events. Note that, it’s up to you to pick the events that are featured from the list of all events that the API supplies.

Git clone the repository via  https://github.com/olabamipetaiwo/patriciaevents.git
Run yarn install to get the neccessary dependencies
Run yarn serve to start the application locally
<!-- Run yarn cy-test to run the tests -->

Approach Taken:

Managed State with the Vuex
Separated the Store into modules for the purpose of scalability (WE can decide to add authenticationn to the app later)
Tailwind CSS and DartSCSS was used for the styling of the app

<!-- Wrote Tests with Cypress -->

Areas to improve upon:
The response gottent from the API endpoint can be written in such a way that it returns uniform objects from all event item




