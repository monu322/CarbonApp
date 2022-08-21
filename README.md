# Asset management UI in React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Routes

The project has two routes, 1. Home page and 2. Carbon Intensity page. Placeholder links are provided that redirect to the home page. Navigation is based on a sidebar, aware of the URL change.

### 1. Home Page

Home page is a combination of two components wrapped in <Fragment>. 1. Asset1 and 2. Asset1 plot 


#### Asset1 

  Asset1 is a form with min, max, date and time fields. Validation is applied to each field using custom flags and inbuilt package capabilities. Two packages, react-time-picker and react-datepicker were used for date and time picker fields. 
  
  Upon form submission, the data is stored in a Context API. 
  
#### Asset1 Plot
  
  Asset1 Plot is a component that displays a line graph based on the user inputted data. The components have access to real time data using context API and hooks, making it reusable anywhere in the app. ChartJs was used for the plotting due its easy to use configurations. 

  
### 2. Carbon Intensity
  
This components utilises the public API from National Grid’s Carbon Intensity API available at https://carbon-intensity.github.io/api-definitions/

  It uses ChartJs to plot the data fetched from the API. A line chart is used for the visualisation of forecasted and actual values of Carbon Intensity. Two distinctly colored and overlying line plots give the viewer a clear idea about the fluctuation and correlation between the two values over a period of time. 

