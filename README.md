# Angular 2 Widgets

Clone the project or download and extract the .zip to get started. This is an example app that 
illustrates how to use an ng2 service to call an API. The app displays a list, creates, edits, and 
deletes widgets. The app relies on an API published at http://angularwidgetsapi.azurewebsites.net
but any API that returns JSON of this type will work:

```[
  {
    "ID": 1,
    "Name": "Widget",
    "Shape": "Square"
  },
  {
    "ID": 2,
    "Name": "Gear",
    "Shape": "Round"
  }
]```

## Running the Application

1. Run `npm install` to install app dependencies

2. Run `npm start` in a separate terminal window to build the TypeScript, watch for changes and launch the web server.