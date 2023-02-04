# EventTrackerProject

## Description


| HTTP Verb | URI                  | Request Body | Response Body |
|-----------|----------------------|--------------|---------------|
| GET       | `/api/locations`    |              | JSON of `List<Location>` |
| GET       | `/api/locations/1` |              | JSON of `Location` 1 |
| POST      | `/api/locations`    | JSON of a new `Location` | JSON of created `Location` |
| PUT       | `/api/locations/1` | JSON of a new version of `Location` 1 | JSON of updated `Location` |
| DELETE    | `/api/locations/1` |              | |


This application is a tracker of the real life locations from your favorite movies and TV shows.

On the home page you will see a list of all the locations in the database.

To see the details of that location, click that locations row on the table.
When you click the row, a new page will appear, labeled 'Location Details'. This shows all the details of the location.
From here you can click "Show All Locations" at the top of the page, or click "Edit" or "Delete" at the bottom of the page.
"Show All Locations" will take you back to the home page, showing all locations. "Delete" will remove that location from the database and return you to the home page. "Edit" will take you to a form that is pre-filled with that locations current details. Change the details in the form, and when you're finished click "Save". This will save the details and return you to the details page for that location.

On the bottom of the page is a form labeled "Add New Location".
Fill out this form and click "Save", and the page will be refreshed with the new location listed.

## Technologies Used
Java, SQL, Javascript, Typescript, Angular, Spring Data JPA, Spring Boot, DOM, REST, JSON, AJAX, Bootstrap, HTML/CSS

## Lessons Learned
For this project I learned how to design a REST API using JSON to parse Http requests, utilize Angular to build the front end, and how to traverse and manipulate the DOM using JavaScript.
