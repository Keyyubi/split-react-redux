# Simple usages of SplitJs, React and Redux 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project demonstrates a simple React usage with hooks, Redux usage with Redux Toolkit, and also React-SplitJs as a 3rd party.

## Available Scripts

In the project directory, you can run:


## `npm i && npm start` (For bash, zhs etc.)
## `npm i; npm start` (For command promp or PowerShell - Windows platforms)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Project Descriptions

- React-Split Used as a 3rd lib. Main view splitted into 4 with this lib.
- You should select an option to see some dummy data within the table on top-left panel. Also you can filter the columns after you select an option. (I used dummy.json & dummy2.json locally, as 2 different json source)
- The app stores the last 5 split-drag action history with dates at the sessionStorage, (5 for each rows and for the vertical dragging)
- You can see current panel ratio in the info panel (Info compnent), at the top-right. The app stores these datas at the Redux and the Info component reads those from store.

Thanks