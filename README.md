# Angular Parking Garage

A example app using Angular components to search for parking garages in the Netherlands.

## How to use Angular cli

In this project Angular cli is installed as dependency of npm.
To create a new app run `"npx ng new my-app-name"` with default settings.
Then a new folder will appear with a skeleton Vue app.
Go to the folder `"cd my-app-name"` and run the app with `"npm start"`.
You can also create components with `npx ng generate component my-component-name`

## Components

- ParkingGarages: contains the whole feature of filtering parking garages
- SearchPlace: contains input field to search for a parking garage by place
- SearchFilter: contains options to filter for parking garage
- ParkingGarageList: contains a list of parking garages
- ParkingGarageItem: contains parking garage information

## Data

- SearchPlace: dynamic data that changes over time (in this case user input)
- SearchFilter: dynamic data that changes over time (in this case user input)
- ParkingGarageList: static data from external source (json)
- ParkingGarageItem: static data from external source (json)

## Challenge

The challenge is to build with Vue above components with a correct component communication.
That means data flows down with props or data flows up with events between components.
And having the state / data in the correct components.