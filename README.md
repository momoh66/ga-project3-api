# Neighbour Needs
Neighbour Needs is a full stack MERN application (MongoDB, Express, React and Node) that allows users to find people in their neighbourhood who can help with anything from maths tutoring and interior design, to plumbing and therapy. This project was created by Ana Borges, Emily Daykin and Mohamed Mohamed in the span of just over a week. For a full list of this app's features, see the [Features](#features) section below.

**This repo contains code for the back end server only; code for the front end client lives [here](https://github.com/momoh66/ga-project3-client).**

## Installation
- Check out the live application [here](https://neighbour-needs.netlify.app/)!
  - Feel free to register and then use your own login credentials, or try a demo one using:
    - Username: `kc@user.com`
    - Password: `Password1!@`
- Or run it locally (make sure you have a local version of MongoDB running):
  - [Front End](https://github.com/momoh66/ga-project3-client): Clone this repo, &#8594; run `npm install` &#8594; run `npm run start:client`
  - Back End: Clone this repo &#8594; run `npm install` &#8594; run `npm run seed` &#8594; run `npm run start:server` 

## Application Walkthrough
### Home & About Pages
<p align="center">
  <img src="./assets/home_page.png" width="46%"  />
  <img src="./assets/about_page.png" width="49.4%"  />
</p>

### Sidebar, Welcome Banner & Login Page
<p align="center">
  <img src="./assets/login_sidebar.png" width="48.2%"  />
  <img src="./assets/sidebar_welcome.png" width="48%"  />
</p>

### Feed & Profiles Page
<p align="center">
  <img src="./assets/feed_profiles_page.png" width="90%"  />
</p>

### Creating a New Post
<p align="center">
  <img src="./assets/create_new_post.png" width="90%"  />
</p>

### Neighbourhoods & Services Pages
<p align="center">
  <img src="./assets/neighbourhoods_page.png" width="48%"  />
  <img src="./assets/services_page.png" width="48.1%"  />
</p>

### Individual and Filtered Profile Pages
<p align="center">
  <img src="./assets/single_profile.png" width="37%"  />
  <img src="./assets/services_filter_page.png" width="49.5%"  />
</p>

### Responsive Design
<p align="center">
  <img src="./assets/responsiveness_feed_profiles.png" width="30%"  />
  <img src="./assets/responsiveness_single_profile.png" width="29%"  />
  <img src="./assets/responsiveness_register.png" width="36%"  />
</p>

## Tech Stack
### Front End
- React Framework (Single Page Application)
- API Handling: Axios
- Pure CSS with Sass
- React-Router-Dom

### Back End
- Server: Node.js & Express
- Database: MongoDB & Mongoose
- Safeguarding from injection attacks: Express Mongo Sanitize
- Password Encryption: Bcrypt
- Authentication: JSON Web Token (JWT)

### Collaboration & Development
- Git, GitHub
- Trello for project management
- Postman for API testing
- Excalidraw for wireframing
- Npm
- Deployment:
  - Front End: Netlify
  - Back End: Heroku (& Mongo Atlas)

## Features
- Display of all profiles, and routing to an individual profile page with more information and a comments area when clicked on
- Real time searching through all profiles by name, location, or service offered
- Minimalist top navbar with a more detailed slide-in-out sidebar
- Log In and Register functionality
- Once logged in:
  - A user icon appears in the navbar, as well as a personalised welcome banner, which redirects to the user's profile page
  - The user can create a post
  - The user can leave a comment on any profile
  - Only the same user who commented/posted can remove their comment and post, no one else's
- Filtering through service type or location via their respective pages

## Architecture:
- Front End: 
  - React Components to compartmentalise code
  - React Hooks for state management and handling side effects
  - Scss stylesheets per react component
  - Single Page Application (`react-router-dom`) using `Link`, `useNavigate`, `useLocation` and `useParams`
- Back End:
  - All security checks (user access credentials) done in the back end:
    - Email validation (correct format and uniqueness)
    - Password validation (encryption and strength: minimum of 8 characters, at least one lowercase & uppercase letter and number)
    - Obscuring the password response from the front end
    - Login credentials expire after 6 hours
  - Secure routing middelware to verify logged in users, same users (only that same user can delete their comment for example) and admin users
  - Error handling middleware to assist with debugging
  - 3 interlinked schema models in MongoDB for profiles, comments and posts
  - Data seeding of 25 user profiles, 15 comments and 3 posts.


## Featured Code Snippets
- schema screenshot?
- authentication error handling (with try/catch block) in BE and FE?

## Wins & Challenges

## Future Improvements