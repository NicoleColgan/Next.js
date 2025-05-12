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
- The compiler handles transformations like bundling and minifying.

### Next.js higher-level core concepts
- environment is the setting in which your code operates
- minifying basically removes extra formatting/ parts of code to make it more efficient (smaller file sizes will be more efficient). It's really only a small aspect of optimisation.
- Next.js offers features like code splitting and SSR for enhanced speed.
- Next enchances deployment with serverless functions by deploying functions at edge locations to reduce latency.

#### Bundled code
- when you build your project for production, it generates optimised and minifies JS files that include your application code and dependencies. These bundled files are whats deployed to your hosting platform.
- Bundling organizes files to improve application efficiency.

#### Code splitting 
- The different pages of your application which are accessible through diff URLs act as unique entry points to the application. 
- Code splitting means splitting the bundled code into smaller segments required by each page. eg say you click on page1, instead of loading the whole application every time, you just load the chunk needed for page1. 
- The objective is to enchance the applications initial load speed by only loading the code essential for that particular page. 
- Shared code between pages is seperated into another bundle to prevent redundant code downloads
- Following the initial page load, next can do pre-loading i.e., loading page it thinks you will visit next

#### Build time v run time
- Build time is the steps that prepare your app code for production. i.e., transforming code into production-optimised files ready to be deployed to servers and used by users
- Run time is is when your application runs in response to a user request after the apps been build and deployed (everything after built & deployed eg a re-render in response to a user clicking something)

#### Client & Server
- Client is the web browser on a users device (client side is the response)
- Server can pre-render pages b4 sending to client (SSR - Server side rendering)
- Rendering is transforming code to html representation of your ui (can occur on server or client side)
- 3 rendering methids in next: server-side rendering (SSR), static site generation (SSG), client-side rendering
- SSR & SSG are pre-rendering techniques cause they involve fetching data & converting React components to html content before deliering to client. React pre-renders each page rather than depending on js. Since its pre rendered, users are never waiting for a response initially which is better ux & seo. 
- Client side rendering better for ui updates that the whole page diesnt need to be fully re-rendered eg notifications  
- Client side updates is called hydration
- When user requests a new page, this happens on server side, but when they interact with the ui eg changing a state, clicking on a button, its client side rendering
- You get initial state by server but then updates are stored on client side
- If you wanna persist data you can use local storage (when you change pages)
- With ssg theres no server @ run time i.e., its just producing the static psges and not respondinding to ui. SSR is better if u need responses from server. ssg for pages that dont change eg a blog page
- CSR handles dynamic updates efficiently once the page is initially loaded.
- Pre-generated HTML allows users to see content almost immediately.
- The browser manages requests and responses.
- Runtime is when the application responds to interaction.
- Hydration helps convert static HTML into an interactive page.
- Rendering involves converting code to visible, interactive HTML.
- SSR occurs on the server, while CSR is browser-based.
- SSG is ideal for pages where content doesn't change often, enhancing speed.

#### CDNs & edge in next & Vercel
- CDNs are basically distributing your content accross servers closer to your customer (lots of servers in diff locations rather than 1 central server). they act as intermediaries between origin server & users
- In general when your talking about the edge your talking about the outmost part of the network situated closest to the user so cdns can be soncsidered as part of the edge since they house static content at the outer layer
- Next allows us to deploy and manage serverless functions at the edge (host your apis rather than an entire backend server which is more efficient)
- Vercel is what you deploy it on and you get access to Vercels cdn
- CDNs reduce latency by serving from nearby servers.

## Building a Next.js App
- To copy the example from this endpoint to a new project (which we havent yet create) called nextjs-blog
```
npx create-next-app@latest nextjs-blog --example https://github.com/vercel/next-learn/tree/main/basics/learn-starter
```
- Each component has a route which you can access through a url eg if you export route1 then you can access it by localhost:3000/route1. eg if you have a file called first-post.js which you have in a folder called posts (inside your pages), then to get to it, you would go to localhost:3000/posts/first-post (even if the actual function has a different name)
- Use the Link component for client side navigation between pages
- The page your on is pre-rendered but if you link to another page then next is prefetching the data to the linked page too
- Dynamic routing allows for routes that can change based on URL parameters.
- Next.js uses seperate js bundles for each page to optimise loading by only loading scripts required for the current page.
- loads only required scripts, enhancing speed.
- Code splitting enhances performance by loading only required code.
- Pages are created by mapping folder structure to routes.
- Link component allows navigation without full page reloads.
- Props pass data between components for dynamic content.
- The fast-refresh feature allows instantaneous browser updates, enhancing development speed.
- Functional components simplify the React codebase and are easier to manage and reuse.
- NPX allows you to run package binaries without installing them globally.

## Metadata and assets in Next.js
- styled version of basic app 
```npx create-next-app next-js-blog --use-npm --example "https://github.com/vercel/next-learn/tree/main/basics/assets-metadata-css-starter"  ```
- npx helps with conflicts too cause you dont have to manually install packages
- Served assets like images are put in the public directory, also useful for robots.txt and any other static assets
- Images arent optimised till build time.
- Images are lazily loaded (loaded as you scroll into the viewport)
- To add metadata you can use the Head component
- To load scripts you can use the script component if you want to optimise loading scripts eg lazy loading, logging, onloading, strategy, stop it delaying the rest of the page from loading etc., 
- lazyOnLoad = dont load right away - wait for idle time6
- strategy controls when we should load - lazyOnLoad means load it during the browsers idle time (not immediately cause its not as important & wont be clicked immediately)
- When you nest jsx inside a component like this 
```
export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          ...
        </Head>
        <h2>
          ...
        </h2>
		...
      </Layout>
    </>
  );
}```
all thats nested inside the Layout component is passed to Layout as a prop. Layout is defined like this
```export default function Layout({children}) {
    return <div className={styles.container}>{children}</div>
}```
so it requires this prop
- In order to apply global css you use the special file name pages/_app.css which wraps every page in your app. The Component prop it takes in represents the page being visited and the pageProps is the data needed for that page. You can then write your css in the global.css file and import it from the _app.js file. _app.js can be used as a global wrapper for your entire app so you can apply stuff to it that you want to affect every page eg css, analytics, auth etc