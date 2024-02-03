# How I worked on this project

My goal was to learn the basics of full-stack development before using frameworks.

- I built the client-side with React with Tailwind CSS for styling using utilities.
- Built the server with Express and PostgreSQL.
- Also used Stripe API to implement the payment of a product.

For my work environment:

- Based the design on [Chris Ferdinandi's web app project](https://gomakethings.com/courses/web-apps/)
- I worked with tasks on a Notion's Kanban Board. [Example of tasks](https://github.com/vittorpeli/react-ecom/blob/main/kanban-screenshot.png)

# How to navigate this project

- Within src components, can see layout components based on [Every Layout](https://every-layout.dev/). [Example](https://github.com/vittorpeli/react-ecom/tree/main/src/components/layouts/Wrapper).
- A http utility function is used for client-side forms with the server API. [Example code](https://github.com/vittorpeli/react-ecom/blob/main/src/pages/Add.jsx)
- The server fetches session data from the Stripe API. [Example code](https://github.com/vittorpeli/react-ecom/blob/main/server/controllers/StripeController.js)

# Why I built the project this way

- I didn't use a state management library like Redux because for this app, a simple `Context API` was enough.
- Using layout components like that allows me to follow CUBE CSS guidelines where I can create maintainable CSS code with it. The ui components act as the blocks, or "B" from CUBE, and I use Tailwind utilities for specific styles.
- I plan to become a full-stack developer, and although I started with front-end development this project allowed me to learn a lot about back-end development and building a custom API.

# If I had more time I would change this

- Refactor some of the code and add a service layer, to split the server request between Auth forms and Photos forms.
- Add end-to-end tests with Cypress.
