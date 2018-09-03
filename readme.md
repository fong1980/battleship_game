**Frontend:**

- React/Redux

- JSX

- Styling: CSS

**Backend:**

- Typescript

- TypeORM

- PostgreSQL

## How to:

1. Install the dependencies:

- In each project directory run `yarn`

2. Run the back-end side of the app:

- Have a ‘DATABASE_URL' environment variable set
- Start the TypeScript compiler: `tsc -w`
- Connect to Postgres with TypeORM: `yarn start`

3. Run the front-end side of the app:

- In the ‘client’ directory run `yarn start`

**API and Databases**

The database containes four tables:

- Users - registred teachers/users. E-mail and a hashed password.
- Students - registred students. Firstname, Lastname and picture url. Its linked with evaluation and batches table
- Batches - The class. Batchnumber, Startdate, Enddate. It's linked with students of this batch.
- Evaluations - evaluations per student. Evaluation color, date and remark. Linked to the correct student

## Endpoints

#### Games

| Endpoint | what it does           |
| -------- | ---------------------- |
| Put      | Put ship positon in db |
