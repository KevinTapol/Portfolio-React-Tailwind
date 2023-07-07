# React Vite Tailwind Portfolio
![Relative](/src/assets/imgs/portfolio.gif)
[Click here for the Code Commerce Youtube link to the original React and Tailwind Portfolio Guide](https://www.youtube.com/watch?v=22CxRxryQFE&t=1733s&ab_channel=CodeCommerce)

[Click here for the Colby Fayock Youtube link to the useInView() hook for the Intersection Observer](https://www.youtube.com/watch?v=r1auJEf9ISo&t=618s&ab_channel=ColbyFayock)

[Click here for Tailwind Vite Docs](https://tailwindcss.com/docs/guides/vite)

[Click here for the React Animations Doc](https://www.npmjs.com/package/react-type-animation)

## To get the project running from Cloning down the repo follow these steps:
npm i  
npm i react-icons --save  
npm install -D tailwindcss postcss autoprefixer  
npx tailwindcss init -p  
npm install --save react-type-animation  
npm install react-intersection-observer --save
---
### To make your own project from scratch follow these steps:
npm create vite@latest .  
cd into folder if needed  
npm i

***Type the following to allow the use of react icons***  
npm i react-icons --save  

***Type the following command to install tailwind for vite***   
npm install -D tailwindcss postcss autoprefixer

***Type the following to initialize tailwind and create a tailwind.config.js file***  
npx tailwindcss init -p

***Copy paste the following in tailwind.config.js***  
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ]

***Replace all of index.css with the following 3 lines***  
@tailwind base;  
@tailwind components;  
@tailwind utilities;

***Delete the boiler plate App.jsx***  
***Delete the App.css file including the imports into other files***

***Type the following to install react animations***  
npm install --save react-type-animation

***Type the following to install the useInView() react hook for  Intersection Observer***
npm install react-intersection-observer --save

***Side Note: adding brackets in tailwind allows us to create custom points***  
Code Commerce uses a custom color blue of **text-[#001b5e]**

### TODO 
* add Contact Functionality
* add Work/Skill History  
* uncomment out Contact component in App.jsx and icons in Sidenav.jsx  
* uncomment out Work component in App.jsx and work icons in Sidenav.jsx