# ListO - Smart Todo List App

ListO is a full stack app that takes user queries and automatically generates list items by running input through Yelp, Trakt, and GoodReads APIs.

## Screenshots
!["Screenshot of landing page"]()
!["Screenshot of index"]()
!["Screenshot of item edit"]()
!["Screenshot of user edit"]()

## Getting Started

1. Get API user keys (Yelp, Trakt, GoodReads)
2. Make `secrets.js` file and add export API keys following naming sytax: GR_KEY, YELP_KEY, TRAKT_KEY 
1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
6. Run the seed: `npm run knex seed:run`
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above