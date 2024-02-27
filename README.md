# Project Overview

# Scrapper website, Auth and Admin

## Admin details
1) Username: `Diyar`
2) Password: `Diyar_11`
   
## Installation

### Prerequisites

- Node.js installed on your system.

### Setup Instructions

#### Clone the Repository

1) Open the cmd:
2) `git clone https://github.com/WebDiyar/assignment4.git`
3) `cd assignment4`
4) `npm install`
5) `npm start` or `node app.js` or `nodemon app.js`

#### Configuration

- Ensure you have the following API keys:
  - Rapid API(Scrapper):  [Scrapper](https://rapidapi.com/fyhao/api/site-scraper)
  - MockAPi: [MockAPi](https://65dd86d3e7edadead7ee2447.mockapi.io/mockApi/mockApi)
 
# Application Routes

This Node.js application defines several routes for different functionalities. Below are the routes and their descriptions:

# Dependencies

This project has the following dependencies:

- [axios](https://www.npmjs.com/package/axios): ^1.6.7
- [bcrypt](https://www.npmjs.com/package/bcrypt): ^5.1.1
- [blob-stream](https://www.npmjs.com/package/blob-stream): ^0.1.3
- [body-parser](https://www.npmjs.com/package/body-parser): ^1.20.2
- [bootstrap](https://www.npmjs.com/package/bootstrap): ^5.3.3
- [ejs](https://www.npmjs.com/package/ejs): ^3.1.9
- [express](https://www.npmjs.com/package/express): ^4.18.2
- [express-session](https://www.npmjs.com/package/express-session): ^1.18.0
- [i18n](https://www.npmjs.com/package/i18n): ^0.15.1
- [mongodb](https://www.npmjs.com/package/mongodb): ^6.3.0
- [mongoose](https://www.npmjs.com/package/mongoose): ^8.1.1
- [multer](https://www.npmjs.com/package/multer): ^1.4.5-lts.1
- [nodemon](https://www.npmjs.com/package/nodemon): ^3.0.3
- [pdfkit](https://www.npmjs.com/package/pdfkit): ^0.14.0
- [sneaks-api](https://www.npmjs.com/package/sneaks-api): ^1.2.3
- [swiper](https://www.npmjs.com/package/swiper): ^11.0.6


## Routes

- `/`: 
  - Description: User registration
  - Use: `app.use("/", registerRouter)`
  
- `/register`: 
  - Description: User login
  - Use: `app.use("/", loginRouter)`

- `/admin`: 
  - Description: Admin section
  - Use: `app.use("/admin", adminRouter)`

- `/user`: 
  - Description: User section
  - Use: `app.use("/user", userRouter)`

- `/scrapperApi`: 
  - Description: Scrapper
  - Use: `app.use("/", scrapperApi)` (1st API)

- `/mockapi`: 
  - Description: MockAPI
  - Use: `app.use("/", mockApi)` (2nd API)
  
- `/quiz`: 
  - Description: History
  - Use: `app.use("/", quizRouter)`

