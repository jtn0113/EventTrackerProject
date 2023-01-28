# EventTrackerProject

## Description
This application is a tracker of the real life locations from your favorite movies and TV shows.

CRUD Operations:
- CREATE (POST)
  - 8084/api/locations
- READ (GET)
  - 8084/api/locations
  - 8084/api/locations/1
- UPDATE (POST)
  - 8084/api/locations/1
- DELETE (DEL)
  - 8084/api/locations/1


| HTTP Verb | URI                  | Request Body | Response Body |
|-----------|----------------------|--------------|---------------|
| GET       | `/api/locations`    |              | JSON of `List<Location>` |
| GET       | `/api/locations/1` |              | JSON of `Location` 1 |
| POST      | `/api/locations`    | JSON of a new `Location` | JSON of created `Location` |
| PUT       | `/api/locations/1` | JSON of a new version of `Location` 1 | JSON of updated `Location` |
| DELETE    | `/api/locations/1` |              | |
