# exportGPT

exportGPT is a web application built using React and Express.js that allows users to convert chat conversations from ChatGPT's chat URL into PDF format. The motivation behind this project arose from the need to download chat conversations without relying on third-party browser extensions or plugins. By creating exportGPT, users can easily convert their ChatGPT chats into PDF files directly from the web browser.

## Features

- Convert ChatGPT chat URLs into PDF format.
- Simple and intuitive user interface.
- No need to install any third-party extensions or plugins.

## Technologies Used

- React.js
- Express.js
- react-pdf/renderer (for PDF generation)
- HTML/CSS

## Usage

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install` in both the `client` and `server` directories.
3. Start the server by running `npm run dev` in the `server` directory.
4. Start the client by running `npm run dev` in the `client` directory.
5. Visit `http://localhost:3000` in your web browser.
6. Enter the ChatGPT chat URL you wish to convert.
7. Click the "Search" button.
8. Once the conversion is complete, the PDF will be available for download.

## Deployment

This project is deployed at [exportgpt.onrender.com](https://exportgpt.onrender.com).

