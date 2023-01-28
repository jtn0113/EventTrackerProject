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
When you click the row, a new form will appear, labled 'Location Details'. This shows all the details of the location.
The input fields are read-only, but if you click the edit button you will be allowed to edit the details. When you're finished editing the location details, click confirm. The page will refresh with the new details of the location.

Next to the edit button is the delete button. This will delete the selected location from the database.

On the bottom of the page is a form labeled "Add A New Location".
Fill out this form and click 'Submit', and the page will be refreshed with the new location listed.

## Technologies Used
Java, JavaScript, SQL, Spring Boot, REST, JPA, AJAX, JSON, HTML, CSS, Git

## Lessons Learned
For this project I learned how to design a REST API using JSON to parse Http requests, and how to traverse and manipulate the DOM using JavaScript.
