# Wildfire Tracker w/NASA API

This project is a revisiting of React concepts using a Google Maps API Key to map NASA API coordinates to areas where current wildfire warning are being issued. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage
Install the following dependencies:  
`npm install @iconify/react`  
`npm install @iconify/icons-mdi`  
`npm install google-map-react`

Also use a Google Maps dev demo key at: https://developers.google.com/maps/documentation/javascript/demo-key. Copy the API key and paste into line 18 of wildfire-tracker/src/components/Map.js at the field labeled 'API-KEY'
`bootstrapURLKeys={{key: 'API-KEY'}}`

Finally to host the project locally, run:
`npm start`

## Features
- Wraparound Map feature as the sole aspect involved in the website,
- Users able to hover over and click individual wildfire warning with information around findable NASA ID and area where warning is issue.

## Styling Choices
- Used icons from @iconify library for clean icon styling as opposed to extracting separate image files from external sources,
- Uniform font and color schemes used throughout,
- Wildfire coordinate marked by uniform red icon throughout in a manner that is visually appealing and large enough for users to click on while being able to parse through multiple warnings.
