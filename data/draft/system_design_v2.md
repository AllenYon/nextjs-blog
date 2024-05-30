# How to design a Google Map?

## Functional requirements and non-functional requirements

How many daily active user are we expected? 1 billion DAU
Which features should we focus on? location update, navigation, ETA(estimated time of arrival)
How large is the road data? 1TB
Should our system take traffic conditions into consideration? Yes
How about different travel modes such as driving, walking, bicycling, and public transportation? Yes

Main Features:

- User location update
- Navigation service, ETA
- Map rendering

Non-functional requirements:

- Accuracy: Users should not be navigated to the wrong directions
- Smooth navigation: On the client side, users should experience very smooth map rendering
- Data and battery usage
- General availability and scalability requirements

## Map projection

## Geocoding

Geocoding is the process of converting addresses into geographic coordinates.

## Geohasing

Geohashing is a method for encoding a geographic location into a short string of letters and digits.
