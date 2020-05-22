# Jed's Supply Co. - Order Summary

A serverless Next.js React application using FaunaDB and CSS Modules, deployed to Vercel.

## API

Using Vercel's serverless functions, order data can be retrieved by

```text
GET /api/orders
```

## CSS Modules

This method of styling is an alternative to my usual styling via styled-components, however after using Svelte I've come to enjoy custom classes on each HTML tag that needs styled. Although global styles may be a hinderance, I find this method to be explicit and relatively easy to understand.

## Directory Structure

### Components

Components are stored in a subdirectory of `components` named the component name in PascalCase, along with their respective CSS file and `index.js` file for export.

```text
components/Header/Header.js
components/Header/Header.module.css
components/Header/index.js
```

### Pages and API

Both `pages/` and `api/` use file-system routing from Next.js and Vercel's serverless functions.
