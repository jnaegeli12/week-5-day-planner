# Week 5 Homework: Day Planner
A daily work scheduler. User enters activities by hour, which are saved to local storage and retrieve when the page reloads.

## Function
When the app loads, the user is presented the current time and date at the top of the page, as well as an input group organized by workday hours, in this case 8:00AM to 5:00PM. Each hour block is color-coded based on the time the user opens the page: hours that have gone by that day are one color (blue), hours still to come are another color (grey), and the current hour is white.

The user can enter text into the input field of each hour (e.g. to mark appointments or tasks), hit the save button, and the inputted text will be saved in local storage and as a data attribute with the input element (value="text"). Saving each text input as a data attribute allows the user to leave the page and reopen it later that day and maintain the text.

## Tools Used
- Bootstrap
- JavaScript
- jQuery
- Moment.js

## Screenshots
![image](https://user-images.githubusercontent.com/62922022/87699838-4bb6cd00-c74a-11ea-8e6b-ba50b073837b.png)
![image](https://user-images.githubusercontent.com/62922022/87699850-507b8100-c74a-11ea-8ecb-e73b68ab3cf0.png)
