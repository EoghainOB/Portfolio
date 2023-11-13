export const projects = [
  {
    title: "Crypto portfolio tracker",
    image: "/images/projects/cryptotracker.jpeg",
    description:
      "This crypto portfolio tracker using React together with MongoDB and Mongoose and it uses the CoinGecko API for pricing and other coin data. The user can add their crypto coin of choice from the dropdown supplied by CoinGecko's API alongside how many of said coin and the price paid per coin. This information is stored in the database and used to display the user's profit/loss per coin and their overall portfolio worth using the latest price information from the API. The amount is displayed in green or red depending on if is up or down. Clicking the information button will show expanded information on each coin.",
    workingUrl: "",
    stack: ["react", "javascript", "nodejs", "express", "html5", "css3"],
    repoURL: "https://github.com/EoghainOB/Crypto-Portfolio",
  },
  {
    title: "Countdown timer",
    image: "/images/projects/countdown.jpeg",
    description:
      "A basic countdown timer made using React. The user enters the number in seconds and starts the countdown. The number counts down while also displaying a coloured progress bar.",
    workingUrl: "https://countdown-omega-drab.vercel.app/",
    stack: ["react", "javascript", "nodejs", "html5", "css3"],
    repoURL: "https://github.com/EoghainOB/Countdown",
  },
  {
    title: "Flight-Finder",
    image: "/images/projects/flightfinder.jpeg",
    description:
      "This front end application was created to work together with a Flight-Finder API I also created. Its an app that allows the user to search for flights and to return results with flight and pricing details regardless if it is a direct flight or if it has a layover. It has been created with Typescript and React.",
    workingUrl: "",
    stack: ["react", "javascript", "nodejs", "express", "html5", "css3"],
    repoURL: "https://github.com/EoghainOB/Flight-Finder-frontend",
  },
  {
    title: "Maths test",
    image: "/images/projects/mathstest.jpeg",
    description:
      "For this project I created a simple application that allowed my young daughter to be able to practice maths. The user can select the type of sum they want to try, addition, subtraction, division or multiplication, as well as the level of difficulty from easy, medium and hard. When they click the start button they are presented with a sum. The user enters the answer into the field and clicks the 'Submit Answer' button. If it is correct the outline will light up green and display the next sum, if it is incorrect it will light up red and the sum will remain.",
    workingUrl: "https://maths-test-two.vercel.app/",
    stack: ["react", "javascript", "typescript", "nodejs", "html5", "css3"],
    repoURL: "https://github.com/EoghainOB/Maths_Test",
  },
  {
    title: "Simple calculator",
    image: "/images/projects/calculator.jpeg",
    description:
      "Made in React, this application performs all the functions of a basic calculator. The user clicks the buttons to set the inputs. I wanted it to look as much like an actual calculator app as possible.",
    workingUrl: "https://calculator-liard-eight.vercel.app/",
    stack: ["react", "javascript", "nodejs", "html5", "css3"],
    repoURL: "https://github.com/EoghainOB/Calculator",
  },
  {
    title: "Finance Tracker",
    image: "/images/projects/mynance.jpeg",
    description:
      "This project was part of a hack week at Salt. I created an expense and income tracker using React with Typescript. A user can log in using the integrated Google authentication and can add their expense or income. This information is saved on MongoDB using Express endoints.",
    workingUrl: "",
    stack: [
      "react",
      "javascript",
      "typescript",
      "nodejs",
      "express",
      "mongodb",
      "html5",
      "css3",
    ],
    repoURL: "https://github.com/EoghainOB/Finance-Tracker",
  },
  {
    title: "ToDo list application",
    image: "/images/projects/todolist.jpeg",
    description:
      "Made using React, the todos are stored in localstorage. The user can add new items to the list, mark them as done, while undo will put it back in the previous location in the list. Of course when the task has been marked as done, it can then be deleted.",
    workingUrl: "https://to-do-list-mu-lake.vercel.app/",
    stack: ["react", "javascript", "nodejs", "html5", "css3"],
    repoURL: "https://github.com/EoghainOB/ToDo-List",
  },
  {
    title: "Tiny Blog",
    image: "/images/projects/tinyblog.jpeg",
    description:
      "This application has been made using React with Typescript. It uses the https://dummyjson.com/posts API for content and the Unsplash API for photos. The content is initially sorted into 5 groups, which are filtered by tags. The user can further refine what content is displayed using the dropdown at the top of the page which chooses only one group. This is a good display of responsive layout.",
    workingUrl: "https://tiny-blog-xi.vercel.app/",
    stack: ["react", "javascript", "typescript", "nodejs", "html5", "css3"],
    repoURL: "https://github.com/EoghainOB/Tiny-Blog",
  },
  {
    title: "Milk E-Way Milk Store",
    image: "/images/projects/milkeway.jpeg",
    description:
      "This was a fun project to work on. I created a 'Milk Store', which contains 99 different types of Milk for sale. The site is made with Typescript on the front and originally had a backend that uses Express to interact with the MongoDB, which contains the products. The site integrates pagination as well as filtering and search and each product has its own page. The user can select the quantity of milk using the slider and add it to the cart. The simple cart features the ability to update the cart by deleting the items.",
    workingUrl: "https://milk-store.vercel.app/",
    stack: [
      "react",
      "javascript",
      "typescript",
      "nodejs",
      "express",
      "mongodb",
      "html5",
      "css3",
    ],
    repoURL: "https://github.com/EoghainOB/Milk-Store",
  },
  {
    title: "Rijksmuseum Image search",
    image: "/images/projects/rijksmaster.jpeg",
    description:
      "For this project I was asked to make use of the Rijksmuseum API and create an application that incorporates search. The user can search well known painters and their work in the input field with suggestions taken from a list of popular artists and their artwork. Users can also search for artwork by century. This queries the API and returns the results on a results page, showing the work along with the title of the piece and a link to the page of that piece of art on the Rijksmuseum website.",
    workingUrl: "https://rijks-master-angular.vercel.app/",
    stack: ["angular", "javascript", "typescript", "nodejs", "html5", "css3"],
    repoURL: "https://github.com/EoghainOB/RijksMaster_Angular",
  },
  {
    title: "Portfolio site",
    image: "/images/projects/eoghaindotcom.jpeg",
    description:
      "I used Vue to create my personal portfolio site and hosted it on Vercel. I start with a mobile-first design in Figma as I wanted the layout to work in all major screen formats. I have integrated a carousel to display my latest project on the main page and created a separate route to display all my projects.",
    workingUrl: "https://www.eoghain.com/",
    stack: ["vue", "javascript", "nodejs", "html5", "css3"],
    repoURL: "https://github.com/EoghainOB/Portfolio",
  },
  {
    title: "GeoMeteo Weather app",
    image: "/images/projects/weather.jpeg",
    description:
      "This weather application has been made in Vue and makes use of two different APIs. The first allows me to get detailed current and daily weather using coordinates and the second allows me to convert the coordinates to a specific address and an address back to coordinates. The app allows the user to search for weather in a specified location or use their own current location which makes use of their browsers 'navigator.geolocation' function.",
    workingUrl: "https://weather-ten-plum-52.vercel.app/",
    stack: ["vue", "javascript", "nodejs", "html5", "css3"],
    repoURL: "https://github.com/EoghainOB/weather",
  },
];
