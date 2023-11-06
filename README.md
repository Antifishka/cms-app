# CMS application

A simple client-side app that works like a primitive CMS (content management system).

## 💻 Tech Stack

React, React Router, Webpack, Babel, Styled Components

## ✏ Introducin

The app, upon its start, downloads a JSON file from a well-known path. The JSON file contains a description of tabs that must be rendered in the app.

📌 The description of a tab in the JSON file consists of the following:
![Interactivity](https://i.postimg.cc/VsnZFXP9/2023-11-06-14-46-36.png)

- id
- title
- the sequential order of the tab among other tabs
- the path to a JS file that has a React component that will be rendered in the tab's content.
