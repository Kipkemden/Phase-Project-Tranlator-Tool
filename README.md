# Phase-Project-Tranlator-Tool

Translation Tool is a JavaScript application that allows users to translate text from English to different languages using the Google Translate API. The app is built using HTML, CSS, and JavaScript, and utilizes the Axios library to make HTTP requests to the API.

## Getting Started
To use the app, you can simply open the index.html file in your browser. Once the page is loaded, you can select the target language from the dropdown menu, enter the text you want to translate in the input field, and click the "Translate" button. The translated text will appear in the output field.

## API Key
In order to use the Google Translate API, you will need to obtain an API key from Google. The app is currently using a RapidAPI key, but you can replace it with your own key if you have one. To replace the key, simply update the X-RapidAPI-Key and X-RapidAPI-Host headers in the options object with your own API key and host.

## How it Works
When the user clicks the "Translate" button, the app sends a POST request to the Google Translate API endpoint with the following parameters:

q: The text to be translated
target: The target language
source: The source language (which is set to English by default)
The response from the API contains an object with a translations property, which is an array of translation objects. The app extracts the first translation object from the array and displays the translated text in the output field.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
This app was built by Denis KIpkemoi. Special thanks to Google for providing the Google Translate API, and to the Axios team for creating a great library for making HTTP requests in JavaScript.