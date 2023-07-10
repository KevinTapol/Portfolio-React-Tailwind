# React Vite Tailwind Portfolio
<!-- ![Relative](/src/assets/imgs/portfolio.gif) -->
<img src="./src/assets/imgs/Portfolio.gif" width="100%" alt="#"/>

<!-- [Click here for Code Commerce's **Portfolio Guide** using React and Tailwind ](https://www.youtube.com/watch?v=22CxRxryQFE&t=1733s&ab_channel=CodeCommerce) -->

<a target="_blank" href="https://www.youtube.com/watch?v=22CxRxryQFE&t=1733s&ab_channel=CodeCommerce" >Click here for Code Commerce's **Portfolio Guide** using React and Tailwind</a>

<a target="_blank" href="https://www.youtube.com/watch?v=r1auJEf9ISo&t=618s&ab_channel=ColbyFayock">Click here for Colby Fayock's **Intersection Observer** useInView() hook tutorial</a>

<a target="_blank" href="https://www.youtube.com/watch?v=_PPWWRV6gbA&t=645s&ab_channel=WebDevSimplified">Click here for WebDevSimplified's tutorial on **Markdown**</a>

<a target="_blank" href="https://tailwindcss.com/docs/guides/vite">Click here for **Tailwind Vite Docs**</a>

<a target="_blank" href="https://www.npmjs.com/package/react-type-animation">Click here for the **React Animations Docs**</a>

## To get the project running Clone down the repo, initialize your repo with git init and type the following lines in the terminal: 
npm install   
npm install -D tailwindcss postcss autoprefixer  
npx tailwindcss init -p 

*npm install will install the following dependencies in package.json* 
- react-icons 
- react-type-animation 
- react-intersection-observer

*-D is used to install the dependencies as developer dependencies*

*npx tailwind init -p initializes tailiwind*

---
## To make your own project from scratch follow these steps seen in Code Commerce's tutorial:
npm create vite@latest .  
cd into folder if needed  
npm install

***Type the following to allow the use of react icons***  
npm install react-icons --save  

***Type the following command to install tailwind developer dependencies for vite***   
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
npm install react-type-animation --save

***Type the following to install the useInView() react hook for  Intersection Observer***  
npm install react-intersection-observer --save

***Side Note: adding brackets in tailwind allows us to create custom points***  
Code Commerce uses a custom color blue of **text-[#001b5e]**

### TODO 
<!-- **- [x] Checked** -->
<!-- * <mark>~~crossed out~~</mark> -->
<!-- - [ ] Unchecked  
- [x] Checked -->
* fix 400-800px media queries
* run a build and host it on netlify or github gh-pages
* add Contact Functionality
* add Work/Skill History