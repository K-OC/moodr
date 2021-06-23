<h1 align="center"> moodr </h1>

> Note: Welcome to moodr! This project was my final assessment at Concordia University's Web Development Bootcamp. 

> Note: This project is still under development, you can check out the project's public trello for planned updates: https://trello.com/b/FjZiyrLo/moodr-planned-updates

---

## What's moodr?

moodr is an app that let's users track how they feel by dropping pins in their location. Simply select an emotion from the drop down menu, then share how you feel. The feed and map components of the app allow users to click around and check the emotional state of a geographic location. 
---

## How does it work? 

Currently I am using the English emotion list from JSilversun's emotion wheel as placeholder: https://github.com/JSilversun/emotion_wheel. This data is pulled from mongodb to generate the dropdown menus, the reason for this being I anticipate building this list up during development, and I would like for it to be dynamic. 

Using navigator.geolocation, we can find the approximate location of the user. This information is fed into the Google Map container so that when the user submits their moodr, a marker and infowindow are associated with the post. Each post is pushed to mongodb, and retrieved on each render. The feed and markers each use a panTo function in order to center the map on a marker when it is clicked directly, or when the card associated with a marker is clicked in the feed.


---

## REST API Endpoints used.



> Get - /api/allemotions - Populates dropdown menu and children.

> Get - /api/getallmoods - Populates map with user submited markers.

> Post - /api/postmoodr - User submits moodr.

> Delete - /api/deletemoodr/ - As there is no user log-in at this time, the only use case for delete is from an administrator, however as the app expands to allow log-in, this delete will be included client-side. 


---

## Contributions

I am open to contributions. As a new developer you will have to be patient as I ask you tons of questions about your commits. 
