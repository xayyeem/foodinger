# styling

## SAAS & SCSS

## Style Component use with Reacr

## Libraries and Framework

### Material UI , bootStrap , Chakra UI , ant Design

## Tailwind

# configure Tailwind

1) terminal

```
npm install -D tailwindcss postcss autoprefixer 
npx tailwindcss init -p

- it install tailwind css and post css. so tailwind css use postcss[post css: use for transforming css along with javasccript].
- npx... - we are invociing or initialzing vconfig.js in our repostiory

```

2) Tailwind Conifig.js
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    copy paste


    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",


  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
3) add to your css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
