# React Vite Tailwind Portfolio
<!-- https://www.youtube.com/watch?v=22CxRxryQFE&t=1733s&ab_channel=CodeCommerce -->
<!-- 1:04:08  -->
npm create vite@latest .
cd into folder if needed
npm i

npm i react-icons --save
this allows the use of react icons as seen in dependencies

https://tailwindcss.com/docs/guides/vite
install tailwind for vite
npm install -D tailwindcss postcss autoprefixer

initialize tailwind and creates tailwind.config.js file
npx tailwindcss init -p

copy paste the following in tailwind.config.js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ]

replace all of index.css with the following 3 lines
@tailwind base;
@tailwind components;
@tailwind utilities;

delete boilerplate
App.css
gut App.jsx

adding brackets in tailwind allows us to create custom points ex z-[99] vs z-20

https://www.npmjs.com/package/react-type-animation
npm install --save react-type-animation


### TODO 
add Contact Functionality
-uncomment out Contact component in App.jsx and icons in Sidenav.jsx
add Work/Skill History
-uncomment out Work component in App.jsx and work icons in Sidenav.jsx