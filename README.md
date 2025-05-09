# Learnings about Next.js

you might want to use client side rendering if your page isnt gunna get shown on seo to load faster

## Basics
- Next.js is basically a React framework to make web apps quickly
- Routing is user navigation throughout application eg clicking homepage then clicking link on homepage to move to another page
- Infrastructure: env where your application is deployed, stored and executed

## Whats React
- Its a js library for creating dynamic uis
- Next is wrapped around React and React is wrapped around js ie nextjs is made from react

## What is Nextjs as a framework
- Next augments react ie makes its tools better - it gives app a predefined structure. in react you dont need a structure.
- makes things better eg render faster, routing, server side stuff
- OAuth is a secure method for handling user authenticatio in nextjs apps
- How can Next.js improve web application performance? By pre-rendering pages and improving rendering efficiency
- What is Next.js primarily used for? Server-side rendering
- What is significant about serverless functions in Next.js? They allow developers to write backend logic without managing servers
- What is a key difference between dynamic rendering and static rendering? Dynamic rendering generates pages at request time.
- Why is pre-rendering beneficial in Next.js applications? It improves search engine optimization because it gives bots a fully loaded version of your web
  page right away so they dont have to wait for js to build the page
- Why is static site generation (SSG) advantageous in web development? ssg is when pages are generated at run time ie ahead of when needed. 
  It pre-builds pages for faster load and fewer server requests
- What method does Next.js use to handle data fetching? Data fetching is streamlined with specialized functions.ie it has built in structured ways to fetch data.
- What is an integral part of the Next.js ecosystem besides its rendering capabilities?
- Why is React commonly used for building user interfaces? It efficiently updates UI components
- Dom is the way the browser interacts with html web pages eg creates hierarchy eg CMS and e-commerce integrations are part of Next.js's extended capabilities.

html - body - div - h1
		  - h2
		  - ul - li
		       - li

## Web basics
React is a declarative ui library that figures out the steps to update the dom on our behalf
differentce between declaritive and imperative is in delcarative, it figures out how to implement what you want but inb imperative you tive it implicit instructions
- js is often faster for dom manipulation than html cause it processes changes without needing to reload the entire html
- React might be chosen over js for building uis because it optimises ui updated but sutomating dom manipulation
- Use strict in js applies strricter parsing and error checking to code
- Reacts declarative approach simplifies ui state management and code clarity which is an advantage for ui developers
- Reach is good over direct dom mamipulatoin code cause it abstracts dom operations behind declaritive syntax
- imperative programming specifies steps but declaritive emphases end goals.
- React basically creates a virtual dom over the real dom and manipulates that which is why its faster
- When rendering with react-dom the output of the render method appears in the html element we were targetting in the render method
- JSX is a suntax extension for JSX- A virtual dom is formed by react to enchance performance instead of modifying the real dom directly
- React-DOM library is needed alongside React to effectively manage its interactions with the DOM
- Browsers use Babel (a tool) to convert JSX to JS
- you can use unpkg.com to access React libraries via a cdn when setting up a react application (use react libraries from the web without needing to download or include them)
- JSX is preferred over normal js because it allows HTML-like syntac which is easier to read and write
- The react- DOM render method renders a react component into the dom when invoked
- Browsers cant execute JSX unless converted to js

## Essentials for react

### Node
Node is an environment that lets you run js outside of your browser eg from terminal. without it, you cant execute js on your computer directly. The browsers run your js files for web pages, but for other tasks eg building servers, you need to run a js file in the terminal, then you need node to do it.

### JS
- Function expressions could be useful (named) if the function wanted to call itself because if you renamed the variable outside the function then it would still work
- function hoisting in js. JS takes declaritive functions n moves them tp the top (of its current scope) so u can call it b4 its defined
- Unlike function declarations, function expressions are not hoisted.
- Destructuring provides a shorter syntax for assigning multiple properties. Concise syntax for unpacking values from arrays or objects.
- Function declarations are hoisted, allowing use before declaration.
- Closures allow functions to retain access to their scope even outside of it.
- The spread operator is used to copy properties from one object to another.

### React
- component is just a reusable piece of code
- need to make the script type babel so it can read the jsx
- React components (functions) need to be capitalised otherwise react wont realise its a component
- So you capitalise the function then when rendering in the div, wrap in a tag - now its a component
- remember the language in function is jsx so you need to end in colons etc
- React uses hooks to maintain state
- Hooks allow you to add logci to components eg toggling something on & off, keeping track of count.
- Capitalization helps React differentiate between components and HTML elements.
- Components are designed to modularize UI pieces, making maintenance and reuse easier.
- Default props act as fallbacks for missing properties.
- A component tree organizes components in a hierarchical structure allowing for better state management.
- Map is used to apply a function to each element, typically to return JSX for rendering.
 - To render a react component in the dom Map is used to apply a function to each element, typically to return JSX for rendering.
 - useState hook returns two elements: the state value and a function to update it.
 - React's reactivity is managed through state updates (useState)
 - Its important to have a unique key for each element in a list to help React track elements and avoid unnecessary re-renders.
 - Components re-render when their state changes.

 ### Next.js basic concepts
 - Next automatically ceates the html & body
 - you need a certain structure
 - npm run dev to run server
 - Static Generation compiles HTML during build time for rapid delivery.
 - tp import features from react in a next component 
 	```import { useState } from 'react';```
- package.json is used to list dependencies and other configuration details.
- package-lock.json ensures the exact same versions of dependencies are installed across environments.
- .jsx indicates files using the JavaScript XML syntax typical in React.
- API routes manage server-side logic for incoming HTTP requests.
- Syntax to export a default component in Next.js (use the function)
	```export default function ComponentName() {}```
- Dynamic Routing allows for URL parameters to generate routes dynamically in Next.js
- The '^' symbol allows npm to install versions greater than the specified one, respecting semver rules.
"# Next.js" 
